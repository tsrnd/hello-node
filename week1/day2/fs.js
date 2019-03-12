// @ts-check

const fs = require('fs')
const request = require('request')

/** handle with file */
// fs.unlink('./test.json', (err) => {
//     if (err) throw err
//     console.log('delete ok')
// })

// fs.rename('./test.json', './what.json', (err) => {
//     if (err) throw err
//     fs.stat('./what.json', (err, stats) => {
//         if (err) throw err
//         console.log(`status of this file ${JSON.stringify(stats)}`)
//     })
//     console.log('rename file ok')
// })

/** path */
let path = process.cwd()
console.log("current path:", path)
fs.open('test.json', 'r', (err, fd) => {
    console.log(fd)
})

/** url object */
let url = new URL('https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png')
console.log(url.hostname, url.host, url.pathname, url.port, url.href)

let fileURL = new URL(`file://${path}/test.json`)
fs.open(fileURL, 'w',(err, fd) => {
    console.log(fd)
})

fs.watch('test.json', { encoding: 'buffer' }, (eventType, filename) => {
    console.log(filename.toString())
})
