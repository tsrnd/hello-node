import { Request, Response } from 'express'
import Http from '../../utils/http'
import * as jwt from 'jsonwebtoken'
import User from '../../models/users'

// import * as jwt from 'jsonwebtoken'
// import * as utils from '../../../utils/http'
// import * as User from '../../../models/user'

// accessLog access log midlewave
let accessLog = (req: Request, res: Response, next: () => void) => {
    console.info(req.headers)
    next()
}

// auth middleware
let auth = (req: Request, res: Response, next: () => void) => {
    let authorizationHeader = req.headers['authorization']
    if (authorizationHeader == undefined) {
        return Http.UnauthorizedResponse(res)
    }
    var tmps = authorizationHeader.split(/Bearer /)
    if (tmps.length <= 1) return Http.UnauthorizedResponse(res)

    let token = tmps[1]
    try {
        let decoded = jwt.verify(token, 'secret')
        User.findOne({ _id: decoded.id })
            .then(user => {
                if (!user) {
                    return Http.UnauthorizedResponse(res)
                }
                // set auth id
                req.body.auth_id = decoded.id
                return next()
            }).catch(err => {
                console.error(err)
                return Http.InternalServerResponse(res)
            })
    } catch (err) {
        console.log(err)
        return Http.UnauthorizedResponse(res)
    }
}

export {
    accessLog,
    auth
}