buf = new Buffer(256);
len = buf.write("Simple Easy Learning");
console.log("Octets written: " + len);
console.log('------------------');
buf1 = new Buffer("Simple Easy Learning");
var json = buf1.toJSON(buf1);
console.log(json);
console.log('==================');
var buffer1 = new Buffer("ABCD ");
var buffer2 = new Buffer("ABCD");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString());
console.log("-=-=-=-=-=-=-=-=-=");
//Compare buffer
var comp = buffer1.compare(buffer2);
if (comp < 0) {
    console.log(buffer1 + " come before " + buffer2);
}
else if (comp === 0) {
    console.log(buffer1 + " is same as "+ buffer2);
}
else {
    console.log(buffer1 + " come after "+ buffer2)
}
console.log('--------------');
//Copy buffer
var bufferCopy = new Buffer(4);
buffer1.copy(bufferCopy);
console.log(bufferCopy.toString());
console.log('--------------');
var bufferSlice = buffer1.slice(0,3);
console.log(bufferSlice.toString());

