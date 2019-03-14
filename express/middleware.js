module.exports = function (options) {
    return function (req, res, next) {
        console.log(req.params);
        console.log(options);
        next();
    }
}
