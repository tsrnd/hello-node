var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require("mongoose-auto-increment");

var UserSchema = Schema({
    userID: {
        type: Number,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
    },
    dateAdded: {
        type: Date,
        default: Date.Now,
    },
})

var User = mongoose.model('user', UserSchema);
autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {model: 'user', field: 'userID'});

module.exports = mongoose.model('User', UserSchema)
