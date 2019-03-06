var fs = require("fs");
var data = "data";

function readStream() {
    var readerStream = fs.createReadStream('file.txt');
    // Set encoding UTF-8
    readerStream.setEncoding('UTF8');

    readerStream.on('data', function(chunk){
        data += chunk;
    });
    readerStream.on('end', function() {
        console.log(data);
    });
    readerStream.on('error', function(err){
        console.log(err.stack);
    });

    console.log("Successfully read stream data from file.txt")
}

module.exports = readStream;