var fs = require('fs');
var data = '';

// reader stream
var readerStream = fs.createReadStream('input.txt');
//set encode utf8
readerStream.setEncoding('UTF8');


// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end',function() {
  console.log(data);
});

readerStream.on('error', function(err) {
  console.log("ERROR :");
  console.log(err.stack);
});

console.log("Program Ended");
