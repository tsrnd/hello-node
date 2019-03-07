console.log("-----------------Console-----------------");
console.log("Console log");
console.info("Console info");
console.warn("Console warn");
console.error("Console error");
console.dir(console);
var d = 0;
console.time('mylable');
console.assert(1==1);
console.timeEnd("mylable");
console.trace("Console trace");
console.log("Label only work with loop");
even:
for (let i = 1; i <= 10; i++){
    if (i % 2 == 1) continue even;
    else {
        console.log(i);
    }
}
process.stdout.write("-----------------Process----------------");
process.on('exit', function(code) {
    // Following code will never execute.
    setTimeout(function() {
        console.log("This will not run");
    }, 0);

    console.log('About to exit with code:', code);
});

process.on('beforeExit', function(code) {
    // Following code will be executed.
    setTimeout(function() {
        console.log("This will run");
        process.exit()
    }, 0);

    console.log('About to beforeExit with code:---this not run', code);
});

console.log("\nPath of process: ", process.execPath)

console.log("\nPlatform of process: ", process.platform);

// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());