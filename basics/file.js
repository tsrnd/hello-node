const fs = require('fs');

function readFileAsync() {
   // async
   fs.readFile('package.json', function (err, data) {
      if (err) {
         console.error('error')
         return
      }
      console.log(data.toString());
   });
}

function readFileSync() {
   var d = fs.readFileSync('package.json')
   console.log(d.toString())
   console.log("END")
}

function writeFile() {
   fs.writeFile("test.txt", "Hey there!", function (err) {
      if (err) {
         return console.log(err);
      }
      console.log("The file was saved!");
   });
}

function createBigFile() {
   const file = fs.createWriteStream('./tmp/big.txt');
   for (let i = 0; i <= 1e6 / 2; i++) {
      file.write('a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh a ab abc abcd abcdg abcdgh \n');
   }

   file.end();
}

doSomethingWithFileSystem = () => {
   fs.open('./tmp/test.txt', 'w', (err, fd) => {
      if (err) {
         throw err
      }
      fs.close(fd, (err) => {
         if (err) {
            throw err
         }
      })

      fs.rename('./tmp/test.txt', './tmp/test2.txt', (err) => {
         if (err) {
            throw err
         }
         console.log('renamed')
      })
      console.log("done.");
   });
}

useFileDescriptor = () => {
   fs.open('./tmp/test.txt', 'r', (err, fd) => {
      if (err) {
         throw err
      }
      fs.fstat(fd, (err, stats) => {
         if (err) {
            throw err
         }
         console.log(stats)
      })
     
      fs.close(fd, (err) => {
         if (err) {
            throw err
         }
      })
   })
}

readAndPourBuffer = () => {
   var b = Buffer.alloc(256)
   fs.open('./tmp/test.txt', 'r', (err, fd) => {
      if (err) throw err
      fs.read(fd, b, 0, b.length, 0, (err, bytes) => {
         console.log(err, bytes)
         console.log(bytes.slice(0, bytes).toString());
      })
      fs.close(fd, (err) => {
        if (err) throw err
      })
    })
}

listOfFileInDirectory = (path) => {
   fs.readdir(path, (err, files) => {
      if (err) {
         throw err
      }
      files.forEach(function(f){
         console.log(f)
      })
   }) 
}

// readFileAsync()
// readFileSync()
// writeFile
// createBigFile()
// doSomethingWithFileSystem()
// useFileDescriptor()
// readAndPourBuffer()
listOfFileInDirectory('tmp')

console.log("Ended");