var mongoose = require('mongoose');
var autoIncrement = require("mongoose-auto-increment");

var Book = mongoose.Schema({
    id: {
        type: Number
        
    },
    name: {
        type: String,
        unique: true,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    publishing_year: {
        type: Number,
        require: true,
    },
    image: {
        type: String
    }
})

autoIncrement.initialize(mongoose.connection);
Book.plugin(autoIncrement.plugin, {model: 'book', field: 'id'});

module.exports = mongoose.model("Book", Book);