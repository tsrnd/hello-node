var fs = require('fs');
fs.readdir(process.argv[2], (err, input) => {
    if (err) console.log(err);
    for (const file of input) {
        if (file.endsWith('.' + process.argv[3])) {
            console.log(file);
        }
    }
})
