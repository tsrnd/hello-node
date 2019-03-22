mongoose = require('mongoose')
mongoosePagine = require('mongoose-paginate')

var schema = mongoose.Schema({
    name: 'string',
    author: 'string',
    pageNumber: 'Number',
})
schema.plugin(mongoosePagine)

module.exports = mongoose.model('Book', schema)