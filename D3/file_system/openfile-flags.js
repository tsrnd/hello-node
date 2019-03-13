var fs = require('fs');

// Asynchronous open
fs.open('input.txt', 'r+', function (err) {
    if (err) {
       return console.error(err);
    }
    console.log("File open successfully!");
});
console.log("Going to open file!");

