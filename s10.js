var net = require('net');
var strftime = require('strftime');

net.createServer((socket) => {
    socket.write(strftime('%Y-%m-%d %H:%M\n'));
    socket.end();
}).listen(process.argv[2])
