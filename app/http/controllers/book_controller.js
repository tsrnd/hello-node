Book = require("../../../models/book");
utils = require("../../../utils/http");

var findAll = (req, res) => {
  const page_number = 10;
  Book.paginate(
    {
      name: {
        $regex: new RegExp(`${req.query.q}.*`)
      }
    },
    {
      select: { _id: 1, name: 1, author: 1, page_number: 1 },
      page: parseInt(req.query.page) || 1,
      limit: per_page,
      sort: { name: -1 }
    }
  )
    .then(results => {
      return utils.successResponse(res, {
        total_pages: results.pages,
        current_page: results.page,
        books: results.docs
      });
    })
    .catch(err => {
      console.log(err);
      return utils.internalServerResponse(res, "Some err occurred");
    });
};

var find = (req, res) => {
  Book.find({ _id: req.params.bookId })
    .then(book => {
      res.send(book);
    })
    .catch(err => {
      console.log(err);
      return utils.internalServerResponse(res, "Some err occurred");
    });
};

var create = (req, res) => {
  if (!req.body.name || !req.body.author) {
    return utils.badRequestResponse(res, "content no empty");
  }
  book = new Book({
    name: req.body.name,
    author: req.body.author,
    pageNumber: req.body.page_number
  });

  book
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      utils.internalServerResponse(res, "some err occurred");
    });
};

var update = (req, res) => {
  if (!req.body.name || !req.body.author) {
    return utils.badRequestResponse(res, "content no empty");
  }
  Book.findByIdAndUpdate(
    req.params.bookId,
    {
      name: req.body.name,
      author: req.body.author,
      pageNumber: req.body.page_number
    },
    { new: true }
  )
    .then(book => {
      if (!book) {
        return utils.notFoundResponse(res);
      }
      return utils.successResponse(res, book);
    })
    .catch(err => {
      console.log(err);
      return utils.internalServerResponse(res, "some error occurred");
    });
};

var deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.bookId)
    .then(book => {
      if (!book) {
        return utils.notFoundResponse(res, "some error occurred");
      }
      return utils.successResponse(res, { msg: "deleted" });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  findAll,
  find,
  create,
  update,
  deleteBook
};
