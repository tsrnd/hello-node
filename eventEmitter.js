var events = require('events');
var eventEmitter = new events.EventEmitter();

// listen 1
var listen1 = function listen1() {
    console.log("listen 1 here");
};
eventEmitter.addListener('connect', listen1);
// listen 2
var listen2 = function listen2() {
    console.log("listen 2 here");
};
eventEmitter.on('connect', listen2);

var countListen = require('events').EventEmitter.listenerCount(eventEmitter, 'connect');
console.log(countListen);

eventEmitter.emit('connect');

eventEmitter.removeListener('connect', listen1);
console.log("listen1 had removed");

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connect');
console.log(eventListeners);
