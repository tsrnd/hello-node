console.log('is controller')
const bcrypt = require('bcrypt');

const User = require('../models/user');
// const pug = require('pug')

exports.index = (req, res) => {
    res.render('index', {title: 'hello nodejs', posts: ['1', '2', '3'] })
}

exports.createUser = (req, res) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        
        const user = new User({
            email: req.body.email,
            password: hash
        });
        User.findOne({ email: req.body.email })
        .then(isExit => {
            if (isExit) {
                res.status(400).json({
                    message: "This Email is exit"
                })
            } else {
                return user.save()
            }
        }).then(result => {
            res.status(200).json({
                message: "Successful"
            })
        }).catch(err => {
            res.status(400).json({
                message: "Failure"
            })
        })
    })
}

exports.userLogin = (req, res, next) => {
    let fetch;
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Email or password invalid"
            })
        }
        fetch = user;
        return bcrypt.compare(req.body.password, user.password)
    })
    .then(reuslt => {
        if (!result) {
            return res.status(400).json({
                message: "Email or password invalid"
            })
        }
        res.status(200).json({
            message: "Successful"
        })
    })
    .catch(err => {
        return res.status(401).json({
            message: "Auth Failure"
        })
    })
}
