var fs = require("fs");
var zlib = require('zlib');

// Nen input.txt thanh input.txt.gz
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
  
// console.log("File duoc nen thanh cong.");

// Giai nen input.txt.gz thanh input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("Giai nen File thanh cong.");