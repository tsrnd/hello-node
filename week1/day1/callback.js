//@ts-check

// demo callback
function IncludeCallback(callback, a, b) {
    callback(a, b)
}

IncludeCallback((a, b) => {
    console.log(`Result of this callback is: ${a+b}`)
}, 2, 2)
