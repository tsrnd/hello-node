module.exports = function logTimeAndURLMiddleware(req, res, next) {
    console.log('Request URL:', req.originalUrl, " Time Access: ", new Date().toISOString())
    next()
}
