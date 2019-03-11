console.log(' -- Write and read buffer -- ');
buf = new Buffer(256);

for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));

console.log('\n -- Convert buffer to JSON -- \n');
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

console.log('\n -- Concatenate buffers -- \n');
var buff1 = new Buffer('TutorialsPoint ');
var buff2 = new Buffer('Simply Easy Learning');
var buff3 = new Buffer.concat([buff1, buff2]);

console.log("buff3 content: " + buff3.toString());

console.log('\n -- Compare buffer -- \n');
var buff1 = new Buffer('ABC');
var buff2 = new Buffer('ABCD');
var result = buff1.compare(buff2);

if (result < 0) {
    console.log(buff1 + " comes before " + buff2);
} else if (result === 0) {
    console.log(buff1 + " is same as " + buff2);
} else {
    console.log(buff1 + " come after " + buff2);
}

console.log('\n -- Copy buffer -- \n');
var buff1 = new Buffer('ABCD');

var buff2 = new Buffer(3);
buff1.copy(buff2);
console.log('buff1 content: ' + buff1.toString());
console.log('buff2 copy from buff1: ' + buff2.toString());

console.log('\n -- Slice buffer -- \n');
var buff1 = new Buffer('TutorialsPoint');
var buff2 = buff1.slice(0, 9);
console.log('buff1 content: ' + buff1.toString());
console.log('buff2 slice from buff1: ' + buff2.toString());

console.log('\n -- Buffer Length -- \n');
var buff = new Buffer('TutorialsPoint');
console.log('buffer length: ' + buff.length);
