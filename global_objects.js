console.log(__filename);

console.log(__dirname);

// setTimeOut
function hello() {
    console.log("Hello everybody!");
}

// var t = setTimeout(hello, 2000);

// clearTimeout(t);
var t = setInterval(hello, 2000);

clearInterval(t);