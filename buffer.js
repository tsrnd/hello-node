var buf1 = new Buffer.alloc(256)
len = buf1.write('Write to buffer')
console.log(len);

len2 = buf1.write('continue', offset = len)
console.log(len2)