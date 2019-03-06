var fs = require("fs");

var readerStream = fs.createReadStream('output.txt');

var writerStream = fs.createWriteStream('input.txt');

readerStream.pipe(writerStream);

console.log("End process");