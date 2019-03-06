var fs = require("fs");
var data = "song chat";

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');
writeStream.end();

writeStream.on('finish', function(){
    console.log("End write");
});
writeStream.on('error', function(err){
    console.log(err.stack);
})

console.log("End process");
