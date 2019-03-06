const b = new Buffer.alloc(256);

const bufferInfo = (buff) => {
    console.log(`Buffer content: '${buff.toString()}'`);
};

len = b.write("Very first string ");

bufferInfo(b);

b.write('Second string', len);

bufferInfo(b);

const b2 = new Buffer.from('I come after');

bufferInfo(b2);

// -1: b2 before b
// 0: same
// 1: b2 after t
const c = b2.compare(b);

console.log(c);

const buffCopy = Buffer.alloc(256);
b.copy(buffCopy, 0, len);

bufferInfo(buffCopy);

const bSlice = b.slice(0, len);

bufferInfo(bSlice);