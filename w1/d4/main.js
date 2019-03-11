console.log(__filename);
console.log(__dirname);

function printHello() {
    console.log('Hello world!');
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

// Now call above function after 2 seconds
setInterval(printHello, 2000);
