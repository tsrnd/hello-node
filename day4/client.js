var net = require('net');
var client = net.connect({port: 8080}, () => {
    console.log('Connected Server');
});

client.on('data', (data) => {
    console.log('Data: ', data.toString());
});

client.on('end', () => {
    console.log('Disconnted Server');
});

setTimeout(() => {
    client.emit("end");
}, 3000);

