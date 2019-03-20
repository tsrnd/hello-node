import * as express from "express"
import UserController from '../http/controllers/user_controller'
import BookController from '../http/controllers/book_controller'
import * as middleware from '../http/middlewares/middlware'
import User from '../models/users'
import { check, body } from 'express-validator/check'

class Routes {
    setup(app: express.Application) {
        var router = express.Router()
        router.use(middleware.accessLog)
        router.use((req: express.Request, res: express.Response, next: () => void) => {
            res.setHeader('Content-Type', 'application/json')
            next()
        })
        router.post('/users/register', [
            check('email').isEmail(),
            check('password').isLength({ min: 8 }),
            body('email').custom(e => {
                return User.findOne({ email: e }).then(user => {
                    if (user) {
                        return Promise.reject('E-mail already in use');
                    }
                })
            })
        ], UserController.create)
        router.post('/users/login', [
            check('email').isEmail(),
            check('password').isLength({ min: 8 })
        ], UserController.login)

        router.use(middleware.auth).route('/books').
            // get(UserControll)
            post([
                check('name').not().isEmpty(),
                check('decription').not().isEmpty()
            ], BookController.create)


        app.use('/api', router)
    }
}

export default Routes