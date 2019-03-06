var fs = require("fs");
var process = require("process");
var readerStream = fs.createReadStream(__dirname+'/input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');
var zipSize = 0
// Handle stream events --> data, end, and error
fs.stat(__dirname+'/input.txt', function (err, stats) {
    zipSize = stats.size;
})
var uploadedSize = 0
readerStream.on('data', function(chunk) {
    // Increment the uploaded data counter
    uploadedSize += chunk.length;

    // Display the upload percentage
    logPercent((uploadedSize/zipSize*100).toFixed(2)+"%");
});
const readline = require('readline');
var sleep = require('sleep')
function logPercent(p) {
    sleep.sleep(1)
    readline.clearLine(process.stdout, 0)
    readline.cursorTo(process.stdout, 0)
    process.stdout.write(`Progress:\t ... ${p}%`);
}

function printX(x) {
    console.log(x);
 }
 
 // Now call above function after 2 seconds
 setTimeout(printX, 2000, "Hello");

 var t = setTimeout(printX, 2000, "Not print");

 // Now clear the timer
clearTimeout(t);


setInterval(printX, 2000, "Repeat");