import * as app_root from "app-root-path";
import {Types} from "mongoose";
import {verify} from "jsonwebtoken";
import {User} from "../models/user";
var config_app = require(app_root + '/app.config.json');

export function isAuthorized(req, res, next) {
    var token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        verify(token, config_app.jwt.private_key, function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            }
            else {
                if (Types.ObjectId.isValid(req.params.id)) {
                    User.findById(decoded.data.id, function (err, user) {
                        if (err) {
                            console.log(err.message);
                            res.status(500).send('Something broke!');
                        }
                        if (user == null) {
                            res.status(400).send("Unauthorization");
                            return;
                        }
                        req.user = user;
                        next();
                    });
                }
                else {
                    res.status(400).send("Unauthorization");
                    return;
                }
            }
        });
    }
    else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
}
