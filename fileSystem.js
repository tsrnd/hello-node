// var fs = require('fs');
// console.log("go go open file");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         console.log(error);
//     }
//     console.log("file have opened");
// });

var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats.dev);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});
/// ------------
// fs.writeFile('input.txt', "i am a supermen", function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("completed write file");
// });
/// ----------------
// var buf = new Buffer(126);
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    fs.read(fd, buf, 0, buf.length, 5, function(err, bytes) {
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + " bytes read");
      
//       // Print only read bytes to avoid junk.
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
// });
//------------

// console.log("Going to delete an existing file");
// fs.unlink('input.txt', function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File deleted successfully!");
// });
//-----------




