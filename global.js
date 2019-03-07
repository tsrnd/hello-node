function hello() {
    console.log("hello");
}

var t = setTimeout(hello, 1000);
clearTimeout(t);

setInterval(hello, 2000);