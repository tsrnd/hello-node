var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('open an existing file');   
console.log("Going to truncate the file after 10 bytes");
fs.open('input-truncate.txt', 'r+', function (err, fd){
    if (err) {
        return console.log(err);
    } 
    fs.ftruncate(fd, 10, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("truncate successful");
        console.log("Going to read the file ");
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            }

            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            // Close the opened file.
            fs.close(fd, function(err) {
                if (err) {
                    console.log(err);
                } 
                console.log("File closed successfully.");
            });
        });
    });
});