// @ts-check

/** create new event */
const EventEmitter = require('events')

let eventEmitter = new EventEmitter()

eventEmitter.on('first_connect', (msg) => {
    console.log(`The message receive is ${msg}`)
})

eventEmitter.on('first_connect', () => {
    console.log('no message receive');
})

eventEmitter.emit('first_connect', 'what')

/** async listener */
eventEmitter.addListener('async_work', () => {
    setImmediate(() => {
        console.log('iam the first men work with async')
    })

    // always call before setImmediate
    process.nextTick(() => {
        console.log('iam the second way to be the first men')
    })
})

// this event will be call later because it have async inside
eventEmitter.emit('async_work')

/** test once */
eventEmitter.once('async_work_with_once', () => {
    setImmediate(() => {
        console.log('cannot call twice');
    })
})

// return only one message
eventEmitter.removeListener('async_work_with_once', () => {
    console.log('listener has been remove')
})
eventEmitter.emit('async_work_with_once')
eventEmitter.emit('async_work_with_once')


/** get event information */
console.log(`Number listener of event first_connect is: ${eventEmitter.listenerCount('first_connect')}`)
