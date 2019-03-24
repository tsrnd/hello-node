import {Response, Request} from 'express'
import {validationResult} from 'express-validator/check'
import User from '../../models/user'
import Http from '../../utils/http'
import * as jwt from 'jsonwebtoken'
import {Md5} from 'md5-typescript'
import Book from '../../models/book'

class BookController {
    create(req: Request, res: Response) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return Http.BadRequestResponse(res,{ errors: errors.array()})
        }

        let book = new Book({
            name: req.body.name,
            description: req.body.description
            author: req.body.auth_id
        })
    }
}

