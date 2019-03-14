var fs = require('fs');
var zlib = require('zlib');

var reader = fs.createReadStream('input.gz');
var writer = fs.createWriteStream('input.gz.txt');
var gunzip = zlib.createGunzip();

reader.pipe(gunzip).pipe(writer);

console.log('finished.');