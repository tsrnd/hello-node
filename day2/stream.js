var fs = require("fs");
// var data = '';
// var readStream = fs.createReadStream('input.txt');
// readStream.setEncoding('UTF8');
// readStream.on('data', function(chunk){
//     data += chunk;
// });
// readStream.on('end', function(){
//     console.log(data);
// });
// readStream.on('error', function(err){
//     console.log(err.stack);
// });
var data = "Simple Easy Learning";
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();
writeStream.on('finished', function(){
    console.log('Write Complete')
})
writeStream.on('error', function(err){
    console.log(err.stack);
}
);
