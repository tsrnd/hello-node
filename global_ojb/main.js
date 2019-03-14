console.log(__filename);

console.log(__dirname);

function helloWord() {
    console.log('Hello world');
}

function helloRepeat() {
    console.log('Hello repeat');
}

var t = setTimeout(helloWord, 1000);

setInterval(helloRepeat, 1000);

// clearTimeout(t);