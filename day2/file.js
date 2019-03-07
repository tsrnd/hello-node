var fs = require("fs");


console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});


console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    // Asynchronous read
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });

    // Synchronous read
    var data = fs.readFileSync('input.txt');
    console.log("Synchronous read: " + data.toString());

});

var buf = new Buffer.alloc(1024);
console.log("Open existing file");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("Open file successful");
    console.log("Read opening file");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + " bytes read");
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Close file successful.")
    });
});