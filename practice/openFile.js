var fs = require('fs');

fs.open('openFile.txt', 'w', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Open file success!');
    }
});
