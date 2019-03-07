var fs = require('fs');
var zlib = require('zlib');

var data1 = '';
var data2 = ' hôm nay tôi đi chơi '

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function (read){
    data1 += read;
});

readerStream.on('end', function (){
    console.log(data1);
});

readerStream.on('err', function (err){
    console.log(err.stack);
});

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data2, 'UTF8');

writerStream.on('data', function (write){
    data2 += write;
});

readerStream.on('end', function (){
    console.log(data2);
});

writerStream.on('err', function (err){
    console.log(err.stack);
})

readerStream.pipe(writerStream);

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));


console.log('Program ended');
