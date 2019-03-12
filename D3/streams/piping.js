var fs = require('fs');

// create reader stream :
var readerStream = fs.createReadStream('input.txt');
// create write stream :
var writerStream = fs.createWriteStream('output.txt');

// pipe file reader to write
readerStream.pipe(writerStream);
 
console.log("Program Ended");
 