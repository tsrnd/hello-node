var fs = require('fs');
var zlib = require('zlib');

// create reader stream :
var readerStream = fs.createReadStream('input.txt');

// create write stream :
var writerStream = fs.createWriteStream('input.txt.gz');

// pipe file reader to write
readerStream
.pipe(zlib.createGzip())
.pipe(writerStream);
 
console.log("File Compressed.");
 