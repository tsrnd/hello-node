import { Response, Request } from "express"
import { validationResult } from 'express-validator/check'
import User from '../../models/users'
import Http from '../../utils/http'
import * as jwt from 'jsonwebtoken'
import { Md5 } from 'md5-typescript'

class UserController {
    create(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return Http.BadRequestResponse(res, { errors: errors.array() })
        }
        let user = new User({
            email: req.body.email,
            password: Md5.init(req.body.password)
        })
        user.save().then(rs => {
            if (!user) {
                return Http.UnauthorizedResponse(res)
            }
            // create a token
            var token = jwt.sign({ id: user.id }, 'secret', {
                expiresIn: 86400 // expires in 24 hours
            })
            return Http.SuccessResponse(res, {
                token: token
            })
        }).catch(e => {
            console.error(e)
            return Http.InternalServerResponse(res)
        })
    }

    login(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(40).json({ errors: errors.array() });
        }

        User.findOne({
            username: req.body.username,
            password: Md5.init(req.body.password)
        }).then(user => {
            if (!user) {
                return Http.UnauthorizedResponse(res)
            }
            // create a token
            let token = jwt.sign({ id: user.id }, 'secret', {
                expiresIn: 86400 // expires in 24 hours
            })
            return Http.SuccessResponse(res, {
                token: token
            })
        }).catch(err => {
            console.error(err)
            return Http.InternalServerResponse(res)
        })
    }
}

export default new UserController