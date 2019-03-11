let fs = require('fs');

fs.readFile('./text.txt', 'utf8', (err, data) =>{
    if (err) return console.log('loi: ' + err);
    console.log('Du lieu ', data);
});