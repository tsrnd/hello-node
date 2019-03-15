var appRoot = require('app-root-path');
const mongoose = require('mongoose');
config_app = require(appRoot+ "/day1_week2/rest/config.json")
var jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.isAuthorized  = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, config_app.jwt.private_key, (err, decoded) => {
            if (err) {
                return res.json({
                success: false,
                message: 'Token is not valid'
                });
            } else {
                if (mongoose.Types.ObjectId.isValid(req.params.id)) {
                    User.findById(decoded.data.id, function (err, user) {
                        if (err) {
                            console.log(err.message)
                            res.status(500).send('Something broke!');
                        }
                        if (user == null) {
                            res.status(400).send("Unauthorization");                            
                            return
                        }
                        req.user = user
                        next();
                    })
                } else {
                    res.status(400).send("Unauthorization");
                    return
                }
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
}
