var mongoose = require("mongoose")

var connection = mongoose.connect('mongodb://localhost:27017/user', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Connect database success")
    }
})

module.exports= connection;