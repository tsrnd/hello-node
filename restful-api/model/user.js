var mongoose = require("mongoose")
var schema = mongoose.Schema;
var db = require('../db/db');
var autoIncrement = require("mongoose-auto-increment");

var userSchema = new schema({
    userID: {
        type:Number,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
})

var User = mongoose.model('user', userSchema);
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {model: 'user', field: 'userID'});

module.exports = {
    User
};