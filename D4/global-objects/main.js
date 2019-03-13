console.log( __dirname );

function printHello() {
    console.log( "Hello, World!");
}
 
function clearIntervalst() {
    clearInterval(t);
}

 // Now call above function after 2 seconds
 t = setInterval(printHello, 2000);

 setTimeout(clearIntervalst, 11000);