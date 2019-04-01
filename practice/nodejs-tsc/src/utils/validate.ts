import { check } from "express-validator/check";
import { Book } from './../models/book';
import * as mongoose from "mongoose";

const book = mongoose.model('Book', Book);

export class Validate {
    public createBookValidate() {
        return [
            check('name')
                .exists()
                .custom((value) => {
                    return book.findOne({ name: value }).then((result) => {
                        if (result) {
                            return Promise.reject('Book already in use');
                        }
                    });
                }),
            check('author')
                .exists()
                .isLength({ min: 4 }),
            check('publishing_year')
                .isInt()
                .exists()
                .isLength({ max: 4 })
        ]
    }
}