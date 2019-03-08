// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handle as follows
var connectHandler = function connect() {
    console.log('connection succesful');

    // Fire the data_received event
    eventEmitter.emit('data_received');
};

// Bind the connection event with the handle
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received successfully');
});

// Fire the commection event
eventEmitter.emit('connection');

console.log('Program ended');
