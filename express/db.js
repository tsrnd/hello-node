const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const DBNAME = 'test';
const PORT = 27017;

var connection = mongoose.createConnection(`mongodb://localhost:${PORT}/${DBNAME}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
autoIncrement.initialize(connection);
module.exports = {
    conn: connection,
    autoInc: autoIncrement.plugin,
    schema: mongoose.Schema
}
