// var fs = require("fs");
// var zlib = require('zlib');

// // Compress the file input.txt to input.txt.gz
// fs.createReadStream('input1.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.txt.gz'));
  
// console.log("File Compressed.");

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input1.txt'));
  
console.log("File Decompressed.");