var buf1 = Buffer.alloc(10);
var buf2 = Buffer.from([10, 20, 30, 40, 50]);
var buf3 = Buffer.from("Simply Easy Learning", "utf-8");
console.log(buf3.toString())
console.log("Write 9 bytes override 9 first bytes of buf3")
len = buf3.write("Let do it");
console.log(buf3.toString())
console.log(buf3.toString('ascii',0,9))
console.log(buf3.toJSON())
console.log(Buffer.concat([buf1,buf2]))
var result = buf1.compare(buf2);
if(result < 0) {
    console.log(buf1 +" comes before " + buf2);
} else if(result === 0) {
    console.log(buf1 +" is same as " + buf2);
} else {
    console.log(buf1 +" comes after " + buf2);
}


var buffer1 = Buffer.from('ABC');

//copy a buffer
var buffer2 = Buffer.alloc(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
 
//slicing a buffer
console.log(buffer2.slice(0,2).toString(), buffer2.slice(0,2).length);
console.log(Buffer.isEncoding("utf8"), Buffer.isEncoding("aa"), Buffer.isBuffer(buf1))