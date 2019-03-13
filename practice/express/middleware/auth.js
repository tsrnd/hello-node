const token = "Duoc Nguyen C."

var authLogin = function (req, res, next) {
    var reqToken = req.headers['auth-login'];
    if (reqToken == "" || reqToken != token) {
        res.status(401);
        return res.json({
            success: false,
            message: 'token is not correct!'
        });
    } else {
        next();
    }
}

module.exports = authLogin