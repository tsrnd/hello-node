//expression function

var count = function (array) {
    return 'There are ' + array.length + ' elements in array'
}

var compute = function(a, b) {
    return `Sum is ${a + b}`;
}

var greet = function(say) {
    console.log(say);
}

// module.exports.name = function name
// module.exports.count = count;
// module.exports.compute = compute;
// module.exports.greet = greet;

// cách 3
module.exports = {
    count: count,
    compute : compute,
    greet: greet,
}


// cách 2

// module.exports.count = function (array) {
//     return 'There are ' + array.length + ' elements in array'
// }

// module.exports.compute = function(a, b) {
//     return `Sum is ${a + b}`;
// }

// module.exports.greet = function(say) {
//     console.log(say);
// }
