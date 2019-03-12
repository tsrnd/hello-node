// @ts-check
const fs = require('fs')

/** buffer */
const buf = Buffer.alloc(2, 'cq', 'ascii')

// buf.write('c q')

console.log(buf)

/** unsafe */
let bufUnsafe = Buffer.allocUnsafe(10)
bufUnsafe.fill('test')
console.log(bufUnsafe)

let test = Buffer.from('test', 'utf8')
console.log(test)

/** buffer with array */
let bufArray = Buffer.from('abuffer')
for (let i = 0; i < bufArray.length; i++) {
    console.log(`element ${i} is ${bufArray[i]}`)
}

/** buffer in file */
let file = fs.readFileSync('./test.csv')
let addingContent = Buffer.from("\n4,btest,street69,6969")
file = Buffer.concat([file, addingContent])
console.log(file.toString())

console.log(file.indexOf('test8', 0))
console.log(file.indexOf(Buffer.from('test')))
