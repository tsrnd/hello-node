const logger = require('./logger');

module.exports = function (err, request, response, next) {
    logger.info(request.method, request.path);
    logger.error(`${request.method}, ${request.path}, ${response.message}`);
    response.status(500);
    response.json({message: 'Internal Server Error'});
}
