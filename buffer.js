var buf = new Buffer.alloc(256)

// write Buffer
len = buf.write('Write to buffer')

buf.write(' continue write!', offset = len)

// read Buffer
// console.log(buf.toString(), buf.toString('ascii', 6, 15))

var buf2 = new Buffer.from('Simply Easy Learning', 'utf-8');

// concat buffers
console.log(Buffer.concat([buf, buf2]).toString())

// compare
result = ''
switch (buf2.compare(buf)) {
    case 1:
        result = 'before'
        break
    case 0:
        result = 'same'
        break
    default:
        result = 'after'
        break
}
console.log(result)

// copy
b = Buffer.concat([buf, buf2])
// console.log(Buffer.isBuffer(b))
// console.log(Buffer.byteLength(buf, 'utf8'))

buf3 = new Buffer.alloc(b.length)
b.copy(buf3)
console.log(buf3.toString())