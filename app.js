// function statement
function sayHi() {
    console.log('hi');
}

// function expression
var sayBye = function(){
    console.log('bye');
};

// function call function 
function callFunction(fun) {
    fun();
}

callFunction(sayBye);

// require
var count = require('./count');
console.log(count.counter(['string1', 'string 2', 'string']));

// Event Emitter
var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people  = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudle');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssfg){
    console.log(mssfg);
});

myEmitter.emit('someEvent', 'the event was emmited');
