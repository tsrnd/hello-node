var fs = require('fs');
var zlib = require('zlib');

// Reading from a stream
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('inputStream.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

// Piping the streams.
// Create a readable stream
var readerStream = fs.createReadStream('inputStream.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('outputPiping.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

// compress a file.
fs.createReadStream('inputStream.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");
