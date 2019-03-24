import * as express from 'express'
import UserController from '../http/controllers/user_controller'
import BookController from '../http/controllers/book_controller'
import * as middleware from '../http/middlewares/middleware'
import User from '../models/user'
import {check, body} from 'express-validator/check'

class Routes {
    setup(app: express.Application) {
        var router = express.Router()
        // router.use(middleware.accessLog)
        router.use((req: express.Request, res: express.Response, next: () => void) => {
            res.setHeader('Content-Type', 'application/json')
            next()
        })
        router.post('/users/register', [
            check('email').isEmail(),
            check('password').isLength({min: 8}),
            body('email').custom(email => {
                return User.findOne({
                    email: email
                }).then(user => {
                    if (user) {
                        return Promise.reject('email already in use')
                    }
                })
            })
        ], UserController.create)
        router.post('/user/login', [
            check('email').isEmail(),
            check('password').isLength({min: 8})
        ], User.login)
        router.use(middleware.auth).route('/books')
                .post([
                    check('name').not().isEmpty(),
                    check('description').not().isEmpty()
                ], BookController.create)
                app.use('/api', router)
    }
}

export default Routes