var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener1
var listener1 = function listener1() {
   console.log('listener1 executes.');
}

// listener2
var listener2 = function listener2() {
  console.log('listener2 execute');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Event listener1 listen event connection");

eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("listener1 will not listen");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("finish programming");
