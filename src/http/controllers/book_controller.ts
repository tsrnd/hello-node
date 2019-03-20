import { Response, Request } from "express"
import { validationResult } from 'express-validator/check'
import User from '../../models/users'
import Http from '../../utils/http'
import * as jwt from 'jsonwebtoken'
import { Md5 } from 'md5-typescript'
import Book from '../../models/books';


class BookController {
    create(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return Http.BadRequestResponse(res, { errors: errors.array() })
        }

        let book = new Book({
            name: req.body.name,
            decription: req.body.decription,
            author: req.body.auth_id
        })

        book.save().then(rs => {
            Book.findOne({ _id: rs._id })
                .select({ '_id': 1, 'name': 1, 'decription': 1, 'created_at': 1, 'updated_at': 1 })
                .populate('author', '_id email')
                .then(rs => {
                    return Http.SuccessResponse(res, rs)
                }).catch(e => {
                    console.error(e)
                    return Http.InternalServerResponse(res)
                })
        }).catch(e => {
            console.error(e)
            return Http.InternalServerResponse(res)
        })
    }
}

export default new BookController()