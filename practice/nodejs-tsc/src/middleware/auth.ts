import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import {User} from './../models/user';

const user = mongoose.model('User', User)

export class AuthLogin {
    public authorization(req: Request, resp: Response, next: any) {
        var authorizationHeader = req.headers['authorization']
        if (authorizationHeader == null) {
            resp.status(401).json({
                errors: [{
                    "msg": "Missing access token!"
                }]
            })
        }
        var tmps = authorizationHeader.split("Bearer ")
        if (tmps.length <= 1) {
            resp.status(401).json({
                errors: [{
                    "msg": "Wrong access token!"
                }]
            })
        }
        var token = tmps[1]
        try {
            var decoded = jwt.verify(token, 'secret')
            user.findOne({ "username": decoded.username })
                .then(user => {
                    if (!user) {
                        resp.status(401).json({
                            errors: [{
                                "msg": "Wrong access token - User doesn't exist!"
                            }]
                        })
                    }
                    return next()
                }).catch(err => {
                    resp.status(500).json({
                        errors: [{
                            "msg": "Internal server error!",
                        }]
                    })
                })
        } catch (err) {
            resp.status(500).json({
                errors: [{
                    "msg": "Internal server error!"
                }]
            })
        }
    }
}