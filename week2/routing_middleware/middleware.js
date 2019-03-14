module.exports = {
    checkId: function(request, response, next) {
        if (!isNumber(request.params.userID)) {
            console.log('User ID is not a number.');
            response.send(`Invalid User ID`);
        }
        next();
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
