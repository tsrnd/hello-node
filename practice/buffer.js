buf = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));         // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));   // outputs: abcde
console.log(buf.toString('utf8', 0, 5));    // outputs: abcde
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde

// Convert buffer to json
console.log(buf.toJSON());

// Concatenate buffer
buf1 = new Buffer.from("Hello everyone. ");
buf2 = new Buffer.from("My name is Duoc. I'm a NodeJS developer");
buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

// Compare buffer
buf5 = new Buffer.from("ABCD");
buf6 = new Buffer.from("ABC");
console.log(buf5.compare(buf6));

// Copy buffer
buf7 = new Buffer.from("hehehahahihi");
buf8 =  new Buffer.alloc(25);
buf7.copy(buf8,2,3,7)
console.log(buf8);
console.log(buf8.toString('ascii'));

// Slice buffer
var buf9 = buf7.slice(6);
console.log(buf9.toString('ascii'));

// Length buffer
console.log(buf9.length);

// Check buffer is encoding
console.log(Buffer.isEncoding(buf9));

// Check object is buffer
var a = 10;
console.log(Buffer.isBuffer(a));
console.log(Buffer.isBuffer(buf9));
