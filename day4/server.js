var net = require('net');

var server = net.createServer((con) => {
    console.log('Connect server');
    con.on('end', () => {
        console.log('Client disconnected');
    });
    con.write('Helo\r\n');
    con.pipe(con);
});

server.listen(8080, () => {
    console.log('Server Listenning');
})
