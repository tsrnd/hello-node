var buffer1 = new Buffer.from('ABC');
var buffer2 = new Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " before " + buffer2);
} else if (result == 0) {
    console.log(buffer1 + " same " + buffer2);
} else {
    console.log(buffer1 + " after " + buffer2);
}

//copy a buffer
var buffer3 = new Buffer.alloc(3);
buffer1.copy(buffer3);
console.log("buffer3 content: " + buffer3.toString());

//slicing a buffer
var buffer1 = new Buffer.from('TutorialsPoint')
var buffer2 = buffer1.slice(0, 9);
console.log("buffer2 content: " + buffer2.toString());

//length of the buffer
console.log("buffer2 length: " + buffer2.length);