var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, input) => {
    if (err) console.log(err);
    console.log(input.split('\n').length - 1);
});
