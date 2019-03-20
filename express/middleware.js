var jwt = require('jsonwebtoken');

exports.Log = function (req, res, next) {
    console.log("=".repeat(60), "\n\nRequest:", {
        time: Date.now(),
        method: req.method,
        path: req.path,
        params: req.body || {},
        query: req.query || {},
        file: req.files || null
    });
    console.log("\n", "=".repeat(60), "\n");
    next();
};

exports.Auth = function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        console.log("dsakjdksajdkas".repeat(10));
        jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, data) {
            console.log(err, data);
        })
    }
    res.redirect('/login');
}
