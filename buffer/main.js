
console.log('Encodings: ascii, utf8, utf16le, ucs2, base64 or hex.')
console.log('-----------Write to buffers');
var buffw = new Buffer(256);
var len = buffw.write('string', 0, 2, 'base64');
console.log('Octets written: ' + len);

console.log('-----------Read from buffer');
buffr = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buffr[i] = i + 97;
}
console.log('ASCII     : ' + buffr.toString('ascii'));
console.log('ASCII-05  : ' + buffr.toString('ascii', 0, 5));
console.log('utf8-05   : ' + buffr.toString('utf8', 0, 5));
console.log('base64-05 : ' + buffr.toString('base64', 0, 5));
console.log(buffr.toString(undefined, 0, 5));
console.log(buffr.toString());

console.log('----------Convert string to Json');
buffj = new Buffer('string to json');
var json = buffj.toJSON(buffj);
console.log(json);

console.log('----------Concat buffer');
buffc1 = new Buffer('Hello ');
buffc2 = new Buffer('World');
buffc = Buffer.concat([buffc1, buffc2]);
console.log('Concat buffer become: ' + buffc.toString());

console.log('----------Compare buffer');
buffcp1 = new Buffer('ABCf');
buffcp2 = new Buffer('ABC');
result = buffcp1.compare(buffcp2);
if (result == 0) {
    console.log(buffcp1 + ' is same as ' + buffcp2);
} else if (result < 0) {
    console.log(buffcp1 + ' comes before ' + buffcp2);
} else {
    console.log(buffcp1 + ' comes after ' + buffcp2);
}

console.log('----------Copy buffer');
buffcpy1 = new Buffer('Copy');
buffcpy2 = new Buffer(30);
console.log('buffer 1 - before: ' + buffcpy1.toString());
console.log('buffer 2 - before: ' + buffcpy2.toString());
console.log('->> Buffer 2 copy from buffer 1');
buffcpy1.copy(buffcpy2);
console.log('buffer 1 - after: ' + buffcpy1.toString());
console.log('buffer 2 - after: ' + buffcpy2.toString());

console.log('----------Slice buffer');
buffs = new Buffer('Hello world');
var slice = buffs.slice(0, 5);
console.log('Result: ' + slice.toString());

console.log('----------Buffer length');
buffl = new Buffer('hello ông già');
console.log('\'' + buffl.toString() + '\' length is ' + buffl.length);
console.log('\'' + buffl.toString() + '\' character length is ' + buffl.toString().length);
console.log('\'' + buffl.toString() + '\' byte length is ' + Buffer.byteLength(buffl));

console.log('-------------End');
