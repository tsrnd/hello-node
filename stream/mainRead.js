var fs = require('fs');

var readerStream = fs.createReadStream('../input.txt');
readerStream.setEncoding('UTF8');

var data = '';
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('error', function(error) {
    console.log(error.stack)
});

readerStream.on('end', function() {
    console.log(data);
});