const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: 'string',
    author: 'string',
    pageNumber: 'Number',
})
schema.plugin(mongoosePaginate)

module.exports = mongoose.model('Book', schema);
