var logger = require('./logger');

module.exports = {
    checkId: function (request, response, next) {
        var userID = parseInt(request.params.userID);
        if (isNaN(userID)) {
            response.status(500);
            response.message = 'Internal Server Error';
            next(new Error('Internal Server Error'));
        }
        if (userID >= 99 || userID < 1) {
            response.status(400);
            response.message = 'Bad Request';
            next(new Error('Bad Request'));
        }
        next();
    },
    errorHandling: function (err, request, response, next) {
        logger.info(request.method, request.path);
        logger.error(`${request.method}, ${request.path}, ${response.message}`);
        response.json({ message: response.message });
    }
}
