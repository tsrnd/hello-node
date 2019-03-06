var fs = require("fs");
var data = "";

var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function(dataIn){
    data += dataIn;
});

readStream.on('end', function(){
    console.log(data);
});

readStream.on('error', function(err){
    console.log(err.stack);
});

console.log('End process');
