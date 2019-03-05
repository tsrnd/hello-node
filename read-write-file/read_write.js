var file = require('fs');

console.log('Start');
//synchronize 
var readFile =  file.readFileSync('read-write-file/input.txt', 'utf8');

//asynchronize
var readFileAsyn = file.readFile('read-write-file/input.txt', 'utf8', function(err, data) {
    if(true) return console.log('Asynchronize ' + data);
    return 0;
});
console.log(readFile);
console.log('Finish');
// var writeFile = file.writeFileSync('read-write-file/output1.txt', readFile);
// var writeFile = file.writeFileSync('read-write-file/output2.txt', 'I\'m Walker');