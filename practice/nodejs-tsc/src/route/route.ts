import { Request, Response } from "express";
import { BookController } from './../controllers/bookControllers';
import { LoginController } from './../controllers/loginController';
import { check } from 'express-validator/check';
import { Book } from './../models/book';
import * as mongoose from "mongoose";
import { AuthLogin } from "./../middleware/auth"

const book = mongoose.model('Book', Book);

export class Routes {
    public bookControllers: BookController = new BookController();
    public loginControllers: LoginController = new LoginController();
    public authMiddleware: AuthLogin = new AuthLogin();
    public routes(app): void {
        app.post('/login', this.loginControllers.login);
        app.route('/book')
            .get(this.bookControllers.get)
            .post(
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
                    .isLength({ max: 4 }),
                this.bookControllers.store);
        app.route('/book/:name')
            .get(this.bookControllers.detail)
            .put(
                check('author')
                    .optional({ nullable: true })
                    .isLength({ min: 4 }),
                check('publishing_year')
                    .optional({ nullable: true })
                    .isLength({ min: 4, max: 4 }),
                this.bookControllers.update)
            .delete(this.bookControllers.delete);
    }
}