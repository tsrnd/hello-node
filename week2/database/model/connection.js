const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DBNAME = 'test';
const PORT = 27017;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connect(`mongodb://localhost:${PORT}/${DBNAME}`,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

module.exports = db
