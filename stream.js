const fs = require('fs');
var data = '';

const readerStream = fs.createReadStream("sample.txt");
const writerStream = fs.createWriteStream("stream.txt");
const pipeWriteStream = fs.createWriteStream("pipe.txt");


readerStream.on('data', (chunk) => {
    data += chunk;
});

readerStream.on('end', () => {
    console.log(data);
    writerStream.write(data, 'UTF8');
});

readerStream.on('error', (err) => {
    console.log(err.stack);
});

readerStream.pipe(pipeWriteStream);

pipeWriteStream.on('finish', () => {
    console.log('Pipe write complete');
})

writerStream.on('finish', () => {
    console.log('Write Complete');
})

writerStream.on('error', err => {
    console.log(err.stack);
})
console.log("END");