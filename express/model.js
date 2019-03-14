var db = require('./db');

exports.User = new db.model('User', {
    item: String,
    qty: Number,
    size: {
        h: Number,
        w: Number,
        uom: String
    },
    status: String
});
