var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World');
}).listen(8081);
console.log('Server running at http:');

// var fs = require('fs');
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

// var newFs = require('fs');
// newFs.readFile('input.txt', function(err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("program end");

// Import events module

///// Notification
// var events = require('events');

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();

// var listner1 = function listner1() {
//     console.log('Listner 1 event');
// };

// var listner2 = function listner2() {
//     console.log('Listner 2 event');
// };

// eventEmitter.addListener('connection', listner1);
// eventEmitter.on('connection', listner2);

// var eventsListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventsListeners);

// eventEmitter.emit('connection');

// eventEmitter.removeListener('connection', listner1);

// eventEmitter.emit('connection');

// eventEmitter = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventsListeners);


////// Buffer

// var buf = new Buffer(10);

// var bufArr = new Buffer([10, 20 ,30 ,40 ,50]);

// var bufM = new Buffer("Node js Learning basic", "utf-8");



// len = buf.write("Simple Leaning");

// console.log("Oc :"+ len);

// var buf = new Buffer(26);
// for (var i = 0; i < 26 ; i++) {
//     buf[i] = i + 97; 
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii', 0,5));
// console.log(buf.toString('utf8', 0,5));
// console.log(buf.toString(undefined,0,5));

// var buf = new Buffer('Simply');
// var json = buf.toJSON(buf);
// console.log(json);

// var buffer1 = new Buffer('TutorialsPoint ');
// var buffer2 = new Buffer('Simply Easy Learning');
// var buffer3 = Buffer.concat([buffer1,buffer2]);

// console.log("buffer3 content: " + buffer3.toString());

// var buff1 = new Buffer('ABC');
// var buff2 = new Buffer('ABCD');
// var result = buff1.compare(buff2);

// if (result < 0) {
//     console.log
// }

// var buff1 = new Buffer('ABC');

// var buff2 = new Buffer(3);

// buff2.copy(buff1);

// // console.log(buff1.intege);

// var buff1 = new Buffer('TutorialTutorialTutorial');

// var buff2 = buff1.slice(4,8);
// console.log(buff2.toString());
// console.log(buff2.length);


//// 
/*
    Read Steam
*/
// var fs = require('fs');
// var data = "";

// var readSteam = fs.createReadStream('input.txt');

// readSteam.setEncoding('UTF8');

// readSteam.on('data', function(chunk) {
//     data += chunk;
// });

// readSteam.on('end', function() {
//     console.log(data);
// });

// readSteam.on('error', function(err) {
//     console.log(err.stack);
// });

/*
    Write Steam
*/

// var fs = require('fs');
// var data = 'easy steam';

// var writerSteam = fs.createWriteStream('output.txt');

// writerSteam.write(data, 'UTF8');

// writerSteam.end();

// writerSteam.on('finish', function() {
//     console.log('Completion');
// });

// writerSteam.on('error', function(err) {
//     console.log(err.stack);
// });


/*
    Piping Steam
*/

// var fs = require('fs');

// var readerSteam = fs.createReadStream('input.txt');

// var writeSteam = fs.createWriteStream('output.txt');

// readerSteam.pipe(writeSteam);


/**
 * Chaining Stream
 * 
 */

//  var fs = require('fs');

//  var zLib = require('zlib');

//  fs.createReadStream('input.txt').pipe(zLib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));


/***
 * Synchronous vs Asynchronous
 */

//  var fs = require('fs');
//  fs.readFile('input.txt', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read " + data.toString());
//  });

//  var data = fs.readFileSync('input.txt');
//  console.log("Synchronous :" + data.toString());


/***
 * Open FIle
 * 
 */

//  var fs = require('fs');
//  console.log('Open File');

//  fs.open('newinput.txt', 'w', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(fd.toString());
//     // fs.createWriteStream('newinput.txt').write("Checking", 'UTF8');
//     console.log("file opened");
//  });

var fs = require('fs');

/**
 * Get File Information
 * fs.stat(path, callback)
 * path − This is the string having file name including path
 * callback − This is the callback function which gets two arguments (err, stats)
 *  where stats is an object of fs.Stats type which is printed below in the example.
 */

 
 fs.stat('input.txt', function(err, stat){
    if (err) {
        return console.error(err);
    }
    // console.log(stat);
    // console.log("Got file");

    // // Check
    // console.log("isFile " + stat.isFile());
    // console.log("isDirectory " + stat.isDirectory());
 });

 /**
  * Writing a File
  * fs.writeFile(filename, data[, options], callback)
  * path − This is the string having the file name including path
  * data − This is the String or Buffer to be written into the file
  * 
  * options − The third parameter is an object which will hold {encoding, mode, flag}.
  *  By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
  *
  *  callback − This is the callback function which gets a single parameter err 
  * that returns an error in case of any writing error.
  */
 
//   console.log("Going to write exiting file");
  fs.writeFile('input.txt', 'Simple learning', function(err) {
    if (err) {
        return console.error(err);
    }
    // console.log("Data write Successful");
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        // console.log("Asynchronous Read " + data.toString());
    })
  });

/**
 * Reading a File
 * fs.read(fd, buffer, offset, length, position, callback)
 * fd − This is the file descriptor returned by fs.open().
 * buffer − This is the buffer that the data will be written to.
 * offset − This is the offset in the buffer to start writing at.
 * 
 * length − This is an integer specifying the number of bytes to read.position 
 * − This is an integer specifying where to begin reading from in the file. 
 * If position is null, data will be read from the current file position.
 * 
 * callback − This is the callback function which gets the three arguments, (err, bytesRead, buffer)
 */

 console.log("Reading a file");
 var buf = new Buffer(1024);

//  fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(bytes + "bytes read");
//         if (bytes > 0) {
//             console.log(buf.slice(5, bytes).toString());
//         }
//         fs.close(fd, function(err) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("Closed")
//         });
//     })
//  });


 /**
  * Closing a File
  * fs.close(fd, callback)
  * fd − This is the file descriptor returned by file fs.open() method
  * 
  * callback − This is the callback function No arguments other
  *  than a possible exception are given to the completion callback.
  * 
  */

//   fs.readdir("/tmp/", function(err, files) {
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function(file) {
//         console.log(file);
//     })
//   });

fs.rmdir("/tmp/test", function(err) {
    if(err) {
        return console.error(err);
    }
    fs.readdir("/tmp/", function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach( function(file) {
            console.log(file);
        });
    })
})
