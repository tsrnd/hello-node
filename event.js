var events = require('events')
var fs = require('fs')

var e = new events.EventEmitter()

// e.on('event_1', function(){
//     console.log('event 1 was called')
// })


// console.log('call')
// e.emit('event_1')
// console.log('end even 1')

// var f = fs.readFile('package1.json', function(e, d){
//     if (e) {
//         console.log('has an error: ', e)
//         return
//     }
//     console.log(d.toString())
// })

// e.setMaxListeners(2)

e.on('newListener', function(){
    console.log('has a listener added')
})

// e.on('removeListener', function(){
//     console.log('has a listener removed')
// })

e.addListener('test_1', function(){
    console.log('test_1 was called 1')
})

var l2 = function(){
    console.log('test_1 was called 2')
}
e.addListener('test_1', l2)

console.log('emit test_1')

e.emit('test_1')
console.log('rm 2')

e.removeListener('test_1', l2)
e.emit('test_1')

console.log(events.EventEmitter.listenerCount(e, 'test_1'))