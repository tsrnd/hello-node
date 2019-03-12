var fs = require('fs');
var data = "Hello nodejs - I'm HuyDoan";

// create write stream :
var writerStream = fs.createWriteStream('output.txt');
// write data with encode UTF8
writerStream.write(data,'UTF8');
writerStream.end();

writerStream.on('finish', function() {
    console.log("Write completed.");
});
writerStream.on('error', function(err) {
   console.log(err.stack);
});
 
console.log("Program Ended");
 