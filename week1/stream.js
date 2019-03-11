var fs = require("fs");
fs.truncate('output_stream.txt', 0, function(){
});

var readStream = fs.createReadStream('input_stream.txt');
readStream.setEncoding('utf-8');

readStream.on('data', function(content) {
    contentSpl = content.split('\n');
    contentSpl.forEach(element => {
        if (isNumber(element)) {
            fs.appendFile('output_stream.txt', element + '\n', function (err) {
                if (err) throw err;
            });
        }
    });
});

readStream.on('end',function(){
   console.log('--- Successfully');
});

readStream.on('error', function(err){
   console.log(err.stack);
});

function isNumber(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
