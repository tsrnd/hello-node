var file = require('fs');

//remove file by unlink();
// file.unlink('read-write-file/output1.txt');

//create folder
// file.mkdirSync('directory/demo');

//remove folder
file.rmdirSync('directory/demo');