const events = require('events');
const eventEmitter = new events.EventEmitter();

const callMe = () => {
    console.log("I'm first");
    eventEmitter.emit("nextCall");
}

eventEmitter.on("call", callMe);

eventEmitter.on("nextCall", () => {
    console.log("I'm next");
});

eventEmitter.emit("call");

console.log("END");