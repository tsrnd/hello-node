var fs = require("fs");
var buf = new Buffer(1024);

console.log("Chuan bi mo mot File dang ton tai");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("File duoc mo thanh cong!");
   console.log("Chuan bi doc du lieu tu File da mo");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // In so luong byte da doc.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // Dong mot File vua duoc mo.
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("File duoc dong thanh cong.");
      });
   });
});

let path = process.cwd();
console.log("current path:", path);