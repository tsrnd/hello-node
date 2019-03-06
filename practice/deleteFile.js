var fs = require('fs');

fs.unlink('fileDelete.txt', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted!');
    }
});
