// var fs = require("fs");

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("end");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log('Tao ket noi thanh cong!');

//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function () {
//     console.log('Du lieu duoc tiep nhan thanh cong.');
// });

// eventEmitter.emit('connection');

// console.log("Ket thuc chuong trinh.");

// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         console.log(err.stack);
//         return;
//     }
//     console.log(data.toString());
// });
// console.log("Program Ended");

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
    console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
