
import * as app_root from "app-root-path";
import {Types} from "mongoose";
import {sign} from "jsonwebtoken";
import {User} from "../models/user";
const config_app = require(app_root + "/app.config.json");
export const userhander = {
    "getAllUsers": function(req, res) {
        User.find(function (err, users) {
            if (err) {
                console.log(err)
                res.status(500).send('Something broke!');
                return
            }
            res.end(JSON.stringify(users));
          })
    },

    "getUser": function(req, res) {
        if (Types.ObjectId.isValid(req.params.id)) {
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

    "deleteUser": function(req, res) {
        if (Types.ObjectId.isValid(req.params.id)) {
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
    
    "register": function(req, res) {
        if (req.body.name != '' && req.body.password != '') {
            User.findOne({ name: req.body.name, password: req.body.password}, function (err, user) {
                if (err) {
                    console.log(err.message)
                    res.status(500).send('Something broke!');
                    return
                }
                if (user != null) {
                    res.status(400).send('User has already exists!');
                    return
                }
                new User({ name: req.body.name, password: req.body.password}).save(function(err, user) {
                    if (err) {
                        console.log(err.message)
                        res.status(500).send('Something broke!');
                        return
                    }
                    let token = sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {"id": user.id}},config_app.jwt.private_key);
                    res.end(JSON.stringify({"token": token}));
                })
                
            })
        } else {
            res.status(400).send('Name and password must be not empty!');
        }
    },

    "login": function(req, res) {
        User.findOne({ name: req.body.name, password: req.body.password}, function (err, user) {
            if (err) {
                console.log(err.message)
                res.status(500).send('Something broke!');
            }
            if (user != null) {
                let token = sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: {"id": user.id}},config_app.jwt.private_key);
                res.end(JSON.stringify({"token": token}));
            } else {
                res.status(400).send("Username or password is incorrect");
            }
        })
    },
    "profile": function(req, res) {
        res.end(JSON.stringify(req.user));        
    }
}
