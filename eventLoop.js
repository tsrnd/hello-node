// import module
var events = require('events')
// create one object
var eventEmitter = new events.EventEmitter()

var sentData = function sentData() {
    console.log("done data")
}
var connect = function connect1() {
    console.log("connected -------")
    eventEmitter.emit('sentdata')
}
eventEmitter.on('connect', connect)


eventEmitter.on('sentdata', sentData)
eventEmitter.emit('connect')
console.log("end")