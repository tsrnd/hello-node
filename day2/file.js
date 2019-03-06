var fs = require("fs");

console.log("Going to get file info!");
fs.stat(__dirname+'/input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});


// Asynchronous - Opening File And Append
fs.open(__dirname+'/input.txt', 'a+', function(err, fd) {
    console.log("---------------Opening File, Truncate And Append Asynchronous-------------");
    if (err) {
       return console.error(err);
    }
    console.log("File opened to read, truncate and append successfully!");  
    // Truncate the opened file.
    fs.ftruncate(fd, 10, function(err) {
        if (err) {
        console.log(err);
        }
    })
    
    fs.write(fd, "\nAppend", null, 'utf8', function(){
    fs.close(fd, function(){
      console.log('file closed');
    });}) 
});

fs.appendFile(__dirname+'/input.txt', "\nAppend", function(err){
    console.log("--------------Append file-------------");
    console.log(err)
})
fs.writeFile(__dirname+'/input.txt', '\Override Content', function(err) {
    console.log("--------------Write file-------------");
    if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile(__dirname+'/input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

fs.unlink('delete.txt', function(err) {
    console.log("----------Deleted File-------------");
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});

fs.readdir(__dirname+"/",function(err, files) {
    console.log("-----------Read directory day2-------------");
    if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});

fs.mkdir(__dirname+'/tmp',function(err) {
    console.log("-----------Create directory tmp-------------");
    if (err) {
       return console.error(err);
    }
    console.log("Directory created successfully!");
    fs.rmdir(__dirname+"/tmp",function(err) {
        console.log("-----------Remove directory tmp-------------");
        if (err) {
           return console.error(err);
        }
        console.log("Remove directory successfully");
    })
 });


