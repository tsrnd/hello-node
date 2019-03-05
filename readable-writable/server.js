const file = require('fs');
const readable = file.createReadStream(__dirname + '/readme.txt', { encoding: 'utf8'});
const writable = file.createWriteStream(__dirname + '/writeme.txt', { encoding: 'utf8'});

readable.on('data', function(chunk) {
    console.log('Writeable: ');
    writable.write(chunk);
});
