var fs = require('fs');

// Asynchronous stat
fs.writeFile('input-write.txt', 'Simly Easy Learning\n', function (err) {
    if (err) {
       return console.error(err);
    }
    console.log("Write file successful!");
    console.log("Read file after written!");
    fs.readFile('input-write.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read writeFile: \n" + data.toString());
    });
   // Check file type

});



fs.appendFile('input-write.txt', 'Simly Medium Learning\n', function (err) {
    if (err) {
       return console.error(err);
    }
    console.log("Write file successful!");
    console.log("Read file after written!");
    fs.readFile('input-write.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read appendFile: \n" + data.toString());
    });
   // Check file type

});
