// @ts-check

const net = require('net')

/** net client */
let port = 8080

const client = net.connect({ port: port }, () => {
    console.log(`connected to ${port}`);
})

client.on('data', (data) => {
    console.log(`data receive: ${data}`)
    client.end()
})

client.on('end', () => {
    console.log('disconnected');
})
