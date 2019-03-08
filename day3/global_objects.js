console.log(__filename);

console.log(__dirname);

function printHello() {
    console.log("Hello World");
}

var t = setTimeout(printHello, 3000);

// clearTimeout(t);
// setInterval(printHello, 3000);