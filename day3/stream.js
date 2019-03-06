var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./day3/input.txt');

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
   console.log(err);
});

console.log("Program Ended");

var writeStream = fs.createWriteStream('./day3/output.txt');

var output = ' I am Quan';

writeStream.write(output, 'UTF8');

writeStream.on('finish', () => {
    console.log('Write done');
});

writeStream.on('error', (err) => {
    console.log(err);
});

var createReadStream1  = fs.createReadStream('./day3/input1.txt');

var createWriteStream1 = fs.createWriteStream('./day3/output1.txt');

createReadStream1.pipe(createWriteStream1);
