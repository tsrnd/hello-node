var buffer1 = new Buffer('ABCD');
var buffer2 = new Buffer('1234');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " come before " + buffer2);
} else if (result === 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(buffer1 + " come after " + buffer2);
}
