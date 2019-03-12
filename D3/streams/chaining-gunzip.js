var fs = require('fs');
var zlib = require('zlib');

// create reader stream :
var readerStream = fs.createReadStream('input.txt.gz');

// create write stream :
var writerStream = fs.createWriteStream('input-gunzip.txt');

// pipe file reader to write
readerStream
.pipe(zlib.createGunzip())
.pipe(writerStream);
 
console.log("File Decompressed.");
 