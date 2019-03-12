// @ts-check

console.log(__dirname)
console.log(__filename)

let time = setTimeout(() => {
    console.log('will be destroy')
})

clearTimeout(time)

// setInterval(() => {
//     console.log('interval?')
// }, 2000)

console.time('t')
console.log('continue');
console.timeEnd('t')
