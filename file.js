var fs = require("fs");

// async
fs.readFile('package.json', function (err, data) {
   if (err) return console.error('  error');
   console.log(data.toString());
});

console.log("Program Ended");

// Read sync
// var f = require('fs')

// var d = f.readFileSync('package.json')

// console.log(d.toString())
// console.log("END")