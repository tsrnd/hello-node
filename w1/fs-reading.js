var fs = require("fs");

// Asynchronous read
fs.readFile(__dirname + '/input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync(__dirname + '/input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
