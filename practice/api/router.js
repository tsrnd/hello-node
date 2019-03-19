
module.exports = function (app) {
    let booksController = require('./controllers/bookController');
    const { check } = require('express-validator/check')
    const book = require('./models/book')

    // bookList Routes
    app.route('/book')
        .get(booksController.get)
        .post(
            check('name')
                .exists()
                .custom((value) => {
                    return book.findOne({ name: value }).then((result) => {
                        if (result) {
                            return Promise.reject('Book already in use');
                        }
                    });
                }),
            check('author')
                .exists()
                .isLength({ min: 4 }),
            check('publishing_year')
                .isInt()
                .exists()
                .isLength({ max: 4 }),
            booksController.store);

    app.route('/book/:id')
        .get(booksController.detail)
        .put(
            check('name')
                .exists()
                .custom((value) => {
                    return book.findOne({ name: value }).then((result) => {
                        if (result) {
                            return Promise.reject('Book already in use');
                        }
                    });
                }),
            check('author')
                .exists()
                .isLength({ min: 4 }),
            check('publishing_year')
                .isInt()
                .exists()
                .isLength({ max: 4 }),
            booksController.update)
        .delete(booksController.delete);
};