const net = require('net');
const util = require('util')
const svPort = 3001;

clients = []

var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        // console.log(socket)
        // socket.pipe(process.stdout)
        clients.forEach((client, index)=>{
            if (client.id == socket.id) {
                return
            }
            client.write(util.format('%d say: %s', client.id, data.toString()), (err) => {
                if (err) throw err
            })
        })
    })
    socket.on('error', (err)=>{
        console.error('has an error', err.message)
    })
}).listen(svPort)

server.on('listening', () => {
    console.log('server is listening...')
})

server.on('error', (err) => {
    console.log('error event', err)
})

server.on('close', () => {
    console.log('closed server')
})

server.on('connection', (socket) => {
    socket.id = Math.floor(Math.random() * 1000);
    clients.push(socket);
    console.info(util.format('%d client connected \n', clients.length))
    clients.forEach((client)=>{
        if (client.id == socket.id) {
            return
        }
        client.write(util.format('%d connected. \n', socket.id), (err) => {
            if (err) throw err
        })
    })
})