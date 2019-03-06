var fs = require("fs");

// Phuong thuc doc file khong dong bo
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Phuong thuc doc file khong dong bo: " + data.toString());
});

// Phuong thuc doc file dong bo
var data = fs.readFileSync('input.txt');
console.log("Phuong thuc doc file dong bo: " + data.toString());

console.log("Ket thuc chuong trinh");