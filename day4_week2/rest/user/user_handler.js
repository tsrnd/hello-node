var appRoot = require('app-root-path');
const User = require('../models/user');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
config_app = require(appRoot+ "/day1_week2/rest/config.json")
module.exports = {
    "getAllUsers": (req, res) => {
        User.find(function (err, users) {
            if (err) {
                console.log(err)
                res.status(500).send('Something broke!');
                return
            }
            res.end(JSON.stringify(users));
          })
    },

    "getUser": (req, res) => {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            User.findById(req.params.id, function (err, user) {
                if (err) {
                    console.log(err.message)
                    res.status(500).send('Something broke!');
                }
                if (user == null) {
                    res.sendStatus(404);
                }
                res.end(JSON.stringify(user));
            })
        } else {
            res.sendStatus(404);
        }
    },

    "deleteUser": (req, res) => {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            User.findByIdAndRemove(req.params.id, function (err, user) {
                if (err) {
                    console.log(err.message)
                    res.status(500).send('Something broke!');
                }
                if (user == null) {
                    res.sendStatus(404);
                }
                res.end("Delete successful!");
            })
        } else {
            res.sendStatus(404);
        }
    },

    "login": (req, res) => {
        User.findOne({ name: req.body.name, password: req.body.password}, function (err, user) {
            if (err) {
                console.log(err.message)
                res.status(500).send('Something broke!');
            }
            if (user != null) {
                token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: {"id": user.id}},config_app.jwt.private_key);
                res.end(JSON.stringify({"token": token}));
            } else {
                res.status(400).send("Username or password is incorrect");
            }
        })
    },
    "profile": (req, res) => {
        res.end(JSON.stringify(req.user));        
    }
}
