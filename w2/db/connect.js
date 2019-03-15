var mongoose = require('mongoose');
// Connect to Mongoose and set connection variable
var conn = mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connect database success")
    }
});

module.exports = conn;