var fs = require('fs');

// Asynchronous stat
fs.stat('input.txt', function (err, stats) {
    if (err) {
       return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successful!");
       
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    

});
console.log("Going to get file info!");

/***
    OUTPUT :
    ---------------------------------------------

    Going to get file info!
    Stats {
        dev: 16777220,
        mode: 33188,
        nlink: 1,
        uid: 502,
        gid: 20,
        rdev: 0,
        blksize: 4194304,
        ino: 3752679,
        size: 72,
        blocks: 8,
        atimeMs: 1552449427216.415,
        mtimeMs: 1552449411517.8682,
        ctimeMs: 1552449411518.8074,
        birthtimeMs: 1552449411516.7654,
        atime: 2019-03-13T03:57:07.216Z,
        mtime: 2019-03-13T03:56:51.518Z,
        ctime: 2019-03-13T03:56:51.519Z,
        birthtime: 2019-03-13T03:56:51.517Z 
    }
    Got file info successful!
    isFile ? true
    isDirectory ? false
    ---------------------------------------------
 */