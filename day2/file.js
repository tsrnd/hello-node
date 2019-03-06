var fs = require("fs");
fs.writeFile('inputFile.txt', 'Simple Easy Learning', function(err){
    if (err) {
       return console.error(err);
    }
    fs.readFile('inputFile.txt', function(err, data){
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
//Create a directory
// fs.mkdir('/tmp/test', function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Create directory successfully');
// })

//Read a directory
console.log("Going to read directory /tmp");
fs.readdir('/tmp/', function(err, files){
    if (err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    }); 
});

console.log("Going to delete an existing file");
fs.unlink('output.txt', function(err){
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});

//get file infomation
console.log("Going to get file info!");
fs.stat('input.txt', function(err, stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("IsFile? "+ stats.isFile());
    console.log("IsDrectory? " +stats.isDirectory())
})