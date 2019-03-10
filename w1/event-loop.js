// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
   console.log('connection succesful.');
   eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended.");
