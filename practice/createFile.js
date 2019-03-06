var fs = require('fs');

fs.appendFile('newFile.txt', 'My name is Duoc', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Saved file!');
    }
});
