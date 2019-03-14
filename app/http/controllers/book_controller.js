const Book = require('../../../models/book')
const utils = require('../../../utils/http')

var findAll = (req, res) => {
    Book.find()
        .then(books => {
            res.send(books);
        }).catch(err => {
            console.error(err)
            utils.internalServerResponse(res, 'Some error occurred')
        })
}

var find = (req, res) => {
    Book.find({ '_id': req.params.bookId })
        .then(book => {
            res.send(book)
        }).catch(err => {
            console.error(err)
            utils.internalServerResponse(res, 'Some error occurred')
        })
}

var create = (req, res) => {
    if (!req.body.name || !req.body.author) {
        return utils.badRequestResponse(res, 'content can not be empty')
    }

    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.page_number
    });

    // Save in the database
    book.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            utils.internalServerResponse(res, 'Some error occurred')
        })
}

var update = (req, res) => {
    if (!req.body.name || !req.body.author) {
        return utils.badRequestResponse(res, 'content can not be empty')
    }

    Book.findByIdAndUpdate(req.params.bookId, {
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.page_number
    }, { new: true })
        .then(book => {
            if (!book) {
                return utils.notFoundResponse(res)
            }
            return utils.successResponse(res, book)
        }).catch(err => {
            console.log(err)
            return utils.internalServerResponse(res, 'Some error occurred')
        })

}

var deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.params.bookId)
        .then(book => {
            if (!book) {
                return utils.notFoundResponse(res)
            }
            return utils.successResponse(res, {msg: 'Deleted'})
        }).catch(err => {
            console.error(err)
            return utils.internalServerResponse(res)
        })
}

module.exports = {
    findAll,
    find,
    create,
    update,
    deleteBook,
}