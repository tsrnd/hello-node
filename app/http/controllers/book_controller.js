const Book = require('../../../models/book')
const utils = require('../../../utils/http')

var findAll = (req, res) => {
    const per_page = 10
    Book.paginate({
        name: {
            $regex: new RegExp(`${req.query.q}.*`)
        },
    }, {
            select: { _id: 1, name: 1, author: 1, page_number: 1 },
            page: parseInt(req.query.page) || 1,
            limit: per_page,
            sort: { name: -1 }
        })
        .then(results => {
            return utils.successResponse(res, {
                total_pages: results.pages,
                current_page: results.page,
                books: results.docs
            })
        }).catch(err => {
            console.error(err)
            return utils.internalServerResponse(res, 'Some error occurred')
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
            return utils.successResponse(res, { msg: 'Deleted' })
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