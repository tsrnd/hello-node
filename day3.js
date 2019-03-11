buf = new Buffer(256);
len = buf.write("Hoc Nodejs tai VietJack");

console.log("Tong so byte da ghi : " + len);

buf2 = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf2[i] = i + 97;
}

console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii', 0, 5));
console.log(buf2.toString('utf8', 0, 5));
console.log(buf2.toString(undefined, 0, 5));

var buf3 = new Buffer('Simply Easy Learning');
var json = buf3.toJSON(buf3);

console.log(json);

var buffer1 = new Buffer('aaa');
var buffer2 = new Buffer('bbb');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("Noi dung cua buffer3 la: " + buffer3.toString());

var buffer4 = new Buffer('ABC');
var buffer5 = new Buffer('ABCD');
var result = buffer4.compare(buffer5);

if (result < 0) {
    console.log(buffer4 + " dung truoc " + buffer5);
} else if (result == 0) {
    console.log(buffer4 + " cung thu tu voi " + buffer5);
} else {
    console.log(buffer4 + " dung sau " + buffer5);
}
