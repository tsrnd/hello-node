function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var t = setInterval(printHello, 2000);
clearInterval(t);