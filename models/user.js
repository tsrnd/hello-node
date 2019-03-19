// getting-started.js
const mongoose = require('mongoose');
//define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        max: [30, 'Username is not more than 30 characters.'],
        required: [true, 'Username is required'] 
    },
    fullname: {
        type: String,
        max: [30, 'Fullname is not more than 30 characters.'],
        required: [true, 'Fullname is required'] 
    },
    role: {
        type: Number,
        // min: [0, 'Role is not more than 30 characters.'],
        // max: [1, 'Role is not more than 30 characters.'],
        enum: [0, 1],
        required: [true, 'Fullname is required']
    },
    password: {
        type: String,
        min: [6, 'Password is as least 6 characters.'],
        max: [30, 'Password is not more than 30 characters.'],
        required: [true, 'Fullname is required'] 
    },
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

var User = mongoose.model('User', userSchema);

//seeder
var admin = new User ({
    username: 'admin',
    password: '123123',
    role: 1,
    fullname: 'Administrator',
    created_at: Date.now(),
    updated_at: Date.now()
});

var user = new User ({
    username: 'user',
    password: '123123',
    role: 0,
    fullname: 'User',
    created_at: Date.now(),
    updated_at: Date.now()
});

admin.save(function (err) {
    if (err) return handleError(err);
});
user.save(function (err) {
    if (err) return handleError(err);
});
