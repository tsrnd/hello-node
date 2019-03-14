var internalServerResponse = (res, data = { msg: 'Internal Server Error' }) => {
    res.status(500).end(JSON.stringify(data))
}

var badRequestResponse = (res, data = { msg: 'Bad Request' }) => {
    res.status(400).end(JSON.stringify(data))
}

var unauthorizedResponse = (res, data = { msg: 'Unauthorized' }) => {
    res.status(401).end(JSON.stringify(data))
}

var forbiddenResponse = (res, data = { msg: 'Forbidden' }) => {
    res.status(403).end(JSON.stringify(data))
}

var successResponse = (res, data) => {
    res.status(200).end(JSON.stringify(data))
}

var notFoundResponse = (res, data = { msg: 'Not Found' }) => {
    res.status(400).end(JSON.stringify(data))
}

module.exports = {
    internalServerResponse,
    badRequestResponse,
    unauthorizedResponse,
    forbiddenResponse,
    successResponse,
    notFoundResponse,
}
