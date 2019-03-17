let jwt = require('jsonwebtoken');
require('dotenv');
const Authenticate = {};
Authenticate.verify = (req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({
                    message: "Token is not valid"
                });
            }
            req.decodedToken = decodedToken;
            next();
        });
    } else {
        return res.status(401).json({
            message: "Unauthorize!"
        });
    }
};

Authenticate.generate = (req, res, next) => {
    try {

        const token = jwt.sign({
            id: req.id
        },
        process.env.SECRET_KEY,
        {
        expiresIn: '1h'
        });
        res.status(200).json({token: token});
    } catch (err) {
        throw err;
    }
};
export default Authenticate;
