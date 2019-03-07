 // import module fs
 var fs = require('fs');
var fs = require('fs');
// data to write
var data = "this is data to write";
// create a writableStream
var writeStream = fs.createWriteStream('inputCallback.txt');
// write data into file
writeStream.write(data, 'utf8');
// mark end write
writeStream.end();
// handle stream write events finish
writeStream.on('finish', function() {
    console.log("finished write");
    // handle stream read events data
     stream.on('data', function(str){
         console.log(str);
     });
});
// create readableStream
var stream = fs.createReadStream('inputCallback.txt');
// read from file
stream.setEncoding('utf8');
// handle events read file end
stream.on('end', function(){
    console.log("end read");
 });
 
console.log("end program");
///-------
// // pipe stream
// var fs = require('fs');
// // create writableStream
// // var readStream = fs.createReadStream('input.txt');
// // var writeStream = fs.createWriteStream('output.txt');
// // readStream.pipe(writeStream);
// // console.log("end program");
// // chain stream
// var zlib = require('zlib');
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input.txt'));
//   console.log("file decompressed");
