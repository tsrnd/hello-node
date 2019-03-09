var events = require('events');

var eventsEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connected successfully.');

    eventsEmitter.emit('data_received');
}

eventsEmitter.on('connection', connectHandler);

eventsEmitter.on('data_received', function() {
    console.log('Data received successfully.');
});

eventsEmitter.emit('connection');

console.log('------ Only receive');
eventsEmitter.emit('data_received');

console.log('------End');