var buf1 = new Buffer(123);
console.log(buf1);

var buf2 = new Buffer([10,20,30,40]);
console.log(buf2);

var buf3 = new Buffer("Vì cuộc đời là những chuyến đi");
var buf4 = new Buffer(", đi mệt rồi thì dừng thôi!");
console.log(buf3);

console.log(buf3.toString('utf8'));
console.log(buf3.toString('ascii',0,5));
console.log(buf3.toString('utf8',5,20));

len = buf1.write("Song cho ha m @@");
console.log(len);

console.log(buf3.toJSON(buf3));
concat = Buffer.concat([buf3, buf4]);
console.log(concat.toString());

result = buf3.compare(buf4);
console.log(parseInt(result));

bufffff = new Buffer('ABCDEF');
var buff = new Buffer(6);
copyBuf = buff.copy(bufffff);
// console.log(copyBuf.toString('utf8'));
console.log(copyBuf.toString());

var buffern = new Buffer("VietNam");
console.log((buffern.slice(0, 4)).toString());

console.log("Length of buffer 3 is: " + buf3.length);









