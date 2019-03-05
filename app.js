console.log("This is app.js");

// setTimeout(function() {
//     console.log("After 3 seconds take");
// }, 3000);

// setInterval(function() {
//     console.log('test');
// },2000);

//normal function
// sayHello();
// function sayHello() {
//     console.log("Hello");
// }


//expression function
// sayGoodbye = function () {
//     console.log("Goodbye");
// }

// sayGoodbye();
var module = require('./module/module');

console.log(module.count(['abc', 'def', 'ghi']));
console.log(module.compute(3, 5));
console.log(module.greet('hello'));