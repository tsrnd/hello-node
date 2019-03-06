// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname
console.log( __dirname );

function printHello() {
    console.log("Hello, World!");
}
 
// Now call above function after 2 seconds
setTimeout(printHello, 2000);

// Now call above function after 3 seconds
var t = setTimeout(printHello, 3000);

// Now clear the timer
clearTimeout(t);

// setInterval run callback function repeatedly after at least seconds.
// Now call above function after 2 seconds
setInterval(printHello, 2000);