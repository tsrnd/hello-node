var fs = require('fs');

fs.writeFile('writeFile.txt', 'I am a developer!', function (err) {
    // if file doesn't exist throw error.
    if (err) {
        console.log(err);
    } else {
        console.log('Write file success!');
    }
});
