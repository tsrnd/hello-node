console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log("Helle Nodejs");
}

setTimeout(printHello, 2000);

var t = setTimeout(printHello, 2000);
clearTimeout(t);

setInterval(printHello, 2000);