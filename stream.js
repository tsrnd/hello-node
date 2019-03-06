const fs = require("fs")
const util = require('util');


var data = ''
const filepath = './tmp/big.txt'

// get file size
const stats = fs.statSync(filepath)
const fsize = stats.size
console.log('file size', fsize)


const readerStream = fs.createReadStream(filepath)
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
    data += chunk;
    logOnCurrentLine(util.format('reading... %f %', Number((data.length/fsize)*100).toFixed(2)));
});

readerStream.on('end',function() {
   console.log('\ndone.');
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

function logOnCurrentLine(msg) {
    process.stdout.clearLine();
    process.stdout.write(msg);
    process.stdout.cursorTo(0);
}