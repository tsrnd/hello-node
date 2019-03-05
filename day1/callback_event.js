console.log("Event Sync Example");

var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');
  
    // Fire the data_received event 
    eventEmitter.emit('data_received', 3);
}

var connectHandlerCus = function(x) {
    console.log(`${x} connection succesful.`);
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandlerCus);
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(x) {
    for (let i = 0; i < x; i++) {
        console.log(`${x} data received succesfully.`);
    }
});

console.log(eventEmitter.listeners("connection"))
// Fire the connection event 
eventEmitter.emit('connection', "First");
eventEmitter.emit('data_received', 1);

console.log("Program Ended.");
console.log("---------------------------------------------------------------------");

var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Sync Program Ended");

console.log("ASync with Callback");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Callback Example");
