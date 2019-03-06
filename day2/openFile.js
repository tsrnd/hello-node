var fs = require("fs");

// Hoat dong mo File theo cach thuc khong dong bo
console.log("Chuan bi mo File hien tai!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("File duoc mo thanh cong!");  

  console.log("thong tin file");
  
  fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Lay thong tin File thanh cong!");
    
    // Kiem tra kieu file
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory()); 
    });  
});

console.log("Chuan bi ghi du lieu vao file hien tai");
fs.writeFile('input.txt', 'You are awesome!',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("Ghi du lieu vao file thanh cong!");
   console.log("Doc du lieu vua duoc ghi");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Phuong thuc doc file khong dong bo: " + data.toString());
   });
});
