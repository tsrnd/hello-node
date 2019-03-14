var fs = require('fs');
var zlib = require('zlib');

var readerStream = fs.createReadStream('../input.txt');
var writerStream = fs.createWriteStream('input.gz');
var gzip = zlib.createGzip();

readerStream.pipe(gzip).pipe(writerStream);