import * as mongoose from 'mongoose';
import { User } from './../models/user';
import { Request, Response } from 'express';
import * as jwt from "jsonwebtoken";
import { resolve } from 'path';

const user = mongoose.model('User', User);

export class LoginController {
    public login(req: Request, resp: Response) {
        user.findOne({ "username": req.body.username }, (err, result) => {
            if (err) {
                console.log(err);
                resp.status(500).end();
            }
            if (!result) {
                resp.status(404).json({
                    errors: [{
                        "msg": "User doesn't exist!"
                    }]
                });
            }
            if (result) {
                if (result.password != req.body.password) {
                    resp.status(401).json({ message: 'Authentication failed. Wrong password.' });
                }
            }
            resp.json(
                {
                    token: jwt.sign(
                        { username: result.username, _id: result._id },
                        'secret',
                        {
                            expiresIn: 86400 // expires in 24 hours
                        }
                    )
                }
            )
        });
    }
}