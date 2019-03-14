const mongoose = require('mongoose')

module.exports = mongoose.model('Book', {
    name: 'string',
    author: 'string',
    pageNumber: 'Number',
});
