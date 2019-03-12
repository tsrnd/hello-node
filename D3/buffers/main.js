// #1 writing to buffers with `alloc Buffer`
buf1 = new Buffer.alloc(256);
len = buf1.write("Simply Easy Learning");
console.log("Octets written : "+  len); // output : Octets written : 20

// #2 Reading from buffer with `allocUnsafe Buffer` (faster than `alloc Buffer`)
buf2 = new Buffer.allocUnsafe(26);
for (var i = 0 ; i < 26 ; i++) {
  buf2[i] = i + 97;
}
console.log(buf2.toString('ascii')); // output : abcdefghijklmnopqrstuvwxyz 

// #3 Buffer.compare with `from buffer` : work with array
const buf3 = Buffer.from('1234');
const buf4 = Buffer.from('0123');
const arr = [buf3, buf4];

compare = buf3.compare(buf4);
var str_compare = " = ";
if (compare === -1) {
    str_compare = " < ";
} else if (compare === 1) {
    str_compare = " > ";
}
console.log(buf3.toString() + str_compare + buf4.toString());
console.log(arr.sort(Buffer.compare)); // output : [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ] ([buf4 , buf3])


// #4 Buffer.poolSize
const str = 'Node.js';
const buf5 = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
  buf5[i] = str.charCodeAt(i);
}

console.log(buf5.toString('ascii'));
// Prints: Node.js
