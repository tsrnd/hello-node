// @ts-check

//** net module */
const net = require('net')

let server = net.createServer((conn) => {
    conn.on('connect', () => {
        console.log('client connected')
    })

    conn.on('end', () => {
        console.log('client disconnect');
    })

    conn.write('Hello')
    conn.pipe(conn)
})

server.listen(8080, () => {
    console.log('server start');
})