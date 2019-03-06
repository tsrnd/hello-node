var buffer =  new Buffer.alloc(26);

for (var i = 0; i <= 26; i++) {
    buffer[i] = i +97;
}
console.log(buffer.toString('ascii'));

var buffer2 = new Buffer.allocUnsafe(15);
console.log(buffer2);
buffer2.fill("hieu");
console.log(buffer2);
console.log(buffer2.toString());