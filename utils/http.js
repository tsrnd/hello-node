var internalServerResponse = (res, data = {msg: 'Internal server error'}) => {
    res.status(500).end(JSON.stringify(data))
}

var badRequestResponse = (res, data = {msg: 'bad request'}) => {
    res.status(400).end(JSON.stringify(data))
}

var unauthorizedResponse = (res, data = { msg: 'Unauthorized'}) => {
    res.status(401).end(JSON.stringify(data))
}

var forbiddenResponse = (res, data = {msg: 'Forbbiden'}) => {
    res.status(403).end(JSON.stringify(data))
}

var successResponse = (res, data) => {
    res.status(200).end(JSON.stringify(data))
}

var notFoundResponse = (res, data = {msg: 'Not found'}) => {
    res.status(404).end(JSON.stringify(data))
}

module.exports = {
    internalServerResponse,
    badRequestResponse,
    unauthorizedResponse,
    forbiddenResponse,
    successResponse,
    notFoundResponse,
}

