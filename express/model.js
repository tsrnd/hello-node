const db = require('./db');

const userSchema = new db.schema({
    username: String,
    fullname: String,
    pasword: String,
    email: String,
    avatar: String,
    age: Number,
    bio: {
        h: Number,
        w: Number,
    },
    status: Boolean
});

userSchema.plugin(db.autoInc, {
    model: 'Users',
    field: 'user_id',
    startAt: 1
});

exports.Users = db.conn.model('Users', userSchema);
