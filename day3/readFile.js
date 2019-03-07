var fs = require('fs');
var buf = new Buffer('1024');

fs.readFile('input.txt', function(err, data){
    if (err){
        return console.error(err);
    }
    console.log('Phuong thuc doc file khong dong bo' + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log('Phuong thuc doc file dong bo' + data.toString());
console.log('Program ended');

console.log('Chuan bi lay thong tin file hien tai');
fs.stat('input.txt', function(err, stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('Lay thong tin file thanh cong');

    console.log(" isFile ? " + stats.isFile());
    console.log(" isDirectory ? " + stats.isDirectory());
});
console.log('Program ended');

console.log(' Chuan bi mo file dang ton tai ');
fs.open('input.txt', 'r+', function(err, fd){
    if (err) {
        return console.error(err);
    }
    console.log(' File duoc mo thanh cong ');
    console.log(' Chuan bi truncate file ');

    fs.ftruncate( fd, 10, function(err){
        if (err) {
            console.log(err);
        }
        console.log(' File duoc truncate thanh cong ');
        console.log(' chuan bi doc du lieu trong file ');

        fs.read( fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            if (bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log(' File duoc dong thanh cong ');
            });
        });
    });
});
