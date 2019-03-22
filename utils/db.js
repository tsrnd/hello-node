mongoose = require('mongoose')
DB_HOST = 'localhost'
DB_NAME = 'mydatabase'
DB_PORT = 27017

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true })

var db = mongoose.connection

db.on('error', (err) => {
    console.error('connect err: ', err)
})

db.once('open', function() {
    console.log('connect db success...')
})

module.exports = {
    db,
}

