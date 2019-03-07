const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i< 3; i++) {
    var workprocess = child_process.exec('node support.js ' + i, function(err, stdout, stderr) {
        if (err) {

        }
    }); 
    workprocess.on('exit', function(code) {
        
    })
}
