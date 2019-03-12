// @ts-check

/** get stream from request */
const http = require('http')
const request = require('request')
const fs = require('fs')

// http.createServer((req, res) => {
//     req.on('data', (data) => {
//         console.log("Data here: " + data)
//         console.log('Type of request'+(req instanceof stream))
//     })

//     req.on('end', () => {
//         return res.end()
//     })
// }).listen(6969)

/** stream to file */
let wStream = fs.createWriteStream('./test.json', 'utf8')
console.log("Can i write? " + wStream.writable)
let data = {
    'data': {
        'mesasage': 'ok friend'
    }
}
let buf = Buffer.from(JSON.stringify(data))
wStream.write(buf)
