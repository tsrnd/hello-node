var fs = require('fs');

fs.open('./day3/i1.txt', 'r+', (err, fd) => {
    if (err) return console.error(err);
    fs.close(fd, (err) => {
        console.log('close i1.txt done');
    });

});

var data = 'Hello';

fs.writeFile('./day3/i1.txt', data, (err) => {
    if (err) return console.log('Error: ', err);
});


fs.readFile('./day3/i2.txt', (err, data) => {
    if (err) return console.log('Err: ', err);
    console.log('Data: ', data.toString());
});

fs.stat('./day3/i2.txt', (err, stat) => {
    console.log(stat);
});
