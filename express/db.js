const db = require('mongoose');

const DBNAME = 'test';
const PORT = 27017;

db.connect(`mongodb://localhost:${PORT}/${DBNAME}`, {
    useNewUrlParser: true
});

module.exports = db
