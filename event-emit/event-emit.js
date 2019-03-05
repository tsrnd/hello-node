//import modules event
var event = require('events');
var mainFunction = require('util');

//create function express
var Person = function (name) {
    this.name = name;
}

mainFunction.inherits(Person, event.EventEmitter);

a = new Person('Nguyen Van A');
b = new Person('Ngo Thi B');
c = new Person('Ha Thi C');
d = new Person('Dang Thi D');

people = [a, b, c, d];
console.log(people[0].name);
people.forEach(function (person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said that: ' + msg);
    });
});

a.emit('speak', 'Hello guy!');
b.emit('speak', 'Nice to meet you');
c.emit('speak', 'Me too');
d.emit('speak', 'Goodbye!');


