import User from '../models/user.models';
import Product from '../models/product.models';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AuthController = {};


AuthController.me = async (req, res , next) => {

    const user = await User.find({_id: req.decodedToken.id})
        .select(['-_id', '-password']);
    res.status(200).json(user[0]);
};

AuthController.login = async (req, res, next) => {
    try {
        const user = await User.find({username: req.body.username}).limit(1);
        let check = await bcrypt.compare(req.body.password, user[0].password);

        if (check) {
            req.id = user[0].id;
            next();
        }
        res.status(401).json({
            message: "username or password is invalid!"
        });
    } catch(err) {
        next(err);
    }
};

AuthController.signup = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        const user = new User(req.body);
        await user.save();
        res.status(204).json();
    } catch (err) {
        next(err);
    }
};

export default AuthController;

