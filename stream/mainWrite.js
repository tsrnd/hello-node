var fs = require('fs');
var data = 'Save file';

var writerStream = fs.createWriteStream('../output.txt');

writerStream.write(data, 'UTF8');

writerStream.on('finish', function() {
    console.log('writen completed.');
});

writerStream.on('error', function(error) {
    console.log(error.stack);
})

writerStream.end();