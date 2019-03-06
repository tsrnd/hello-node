// buf = new Buffer(5);
// for (var i = 0 ; i < 5 ; i++) {
//   buf[i] = i + 98;
// }

var buf = new Buffer('abcde');
var buf2 = new Buffer('abcdf');


console.log(buf);
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

console.log(buf.toJSON());

console.log('Concat: ', Buffer.concat([buf,buf2]).toString());
console.log('Compare', buf.compare(buf2));

var buf3 = new Buffer('123');
var buf4 = new Buffer(5);

buf3.copy(buf4);
console.log('Buffer copy: ', buf4.toString());
console.log(buf3.length);

