// open file
// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Phuong thuc doc file khong dong bo: " + data.toString());
// });
// var data = fs.readFileSync('input.txt');
// console.log("Phuong thuc doc file dong bo: " + data.toString());
// console.log("Ket thuc chuong trinh");
var fs = require("fs");

// get info file
// console.log("Chuan bi lay thong tin File hien tai!");
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Lay thong tin File thanh cong!");
//     console.log("isFile ? " + stats.isFile());
//     console.log("isDirectory ? " + stats.isDirectory());
// });

// write into file
// var fs = require("fs");

// console.log("Chuan bi ghi du lieu vao file hien tai");
// fs.writeFile('input.txt', 'hihihi', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Ghi du lieu vao file thanh cong!");
//     console.log("Doc du lieu vua duoc ghi");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Phuong thuc doc file khong dong bo: " + data.toString());
//     });
// });

// read file
// var fs = require("fs");
// var buf = new Buffer(1024);

// console.log("Chuan bi mo mot File dang ton tai");
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File duoc mo thanh cong!");
//     console.log("Chuan bi doc du lieu tu File da mo");
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(bytes + " bytes read");
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });
// });

// close file

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Chuan bi mo mot File dang ton tai");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File duoc mo thanh cong!");
    console.log("Chuan bi doc du lieu tu File da mo");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("File duoc dong thanh cong.");
        });
    });
});
