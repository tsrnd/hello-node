var fs = require("fs");
fs.readFile('inputCallback.txt', function (error, data) {
          if (error) {
              return console.error(error)
          } 
            console.log(data.toString())
              
          
});
// console.log(data.toString());

console.log("Program Ended");