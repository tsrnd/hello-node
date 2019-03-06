var fs = require("fs");
var data = '\nSimply Easy Learning';
console.log("----------Write stream----------")
// Create a writable stream with append
var writerStream = fs.createWriteStream(__dirname+'/input.txt', {'flags': 'a'});

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("----------Read stream----------")
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream(__dirname+'/input.txt');

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


console.log("----------Piping stream----------")

// Create a writable stream
var writerStream1 = fs.createWriteStream(__dirname+'/output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream1);
console.log("Program Ended");

console.log("----------Chaining stream----------")
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream(__dirname+'/input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream(__dirname+'/input.txt.gz'));
  
console.log("File Compressed.");


fs.unlinkSync(__dirname+'/output.txt')
fs.unlinkSync(__dirname+'/input.txt.gz')
