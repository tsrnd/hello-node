const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i< 3; i++) {
    var workprocess = child_process.exec('node support.js ' + i, function(err, stdout, stderr) {
        if (err) {
            if (err) {
                console.log(err);
            }
        }
    }); 
    workprocess.on('exit', function(code) {
        console.log("Child" + code)
    });
}


/***
 * spawn
 */

 for (var i = 0; i<3; i++) {
    var workProcess =  child_process.spawn('node', ['support.js', i]);
    workProcess.stdout.on('data', function(data) {
        console.log("stdout data", data);
    });
    workProcess.stderr.on('data', function(data){
        console.log("stderr data", data);
    });
    workProcess.on('close', function(code){
        console.log('Child code ', code);
    });
 }

 /**
  * Fork
  */

  for(var i = 0; i<3; i++) {
      var workProcess = child_process.fork('support.js', [i]);
      workProcess.on('close', function(code){
          console.log('Fork child code ', code)
      })
  }