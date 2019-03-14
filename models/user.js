const mongoose = require('mongoose')

var schema = mongoose.Schema({
    username: 'string',
    password: 'string',
})

module.exports = mongoose.model('User', schema);
