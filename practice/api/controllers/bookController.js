const util = require('util')
const db = require('./../db')
var mongoose = require('mongoose');
const book = mongoose.model("Book");
const { check, validationResult } = require('express-validator/check');

module.exports = {
    get: (req, res) => {
        book.find({}, function (err, result) {
            if (err) throw err;
            res.render("book/index", {
                books: result
            })
        });
    },
    detail: (req, res) => {
        book.find({"_id": req.params.id}).then(result => {
            res.render("book/detail", {
                book: result
            })
        }).catch(err => {
            console.error(err)
            res.status(500).end({"msg": "Error"})
        })
    },
    update: (req, res) => {
        errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        book.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).end();
            }
            console.log("1 document updated");
            res.redirect("/book");
        })
    },
    store: (req, res) => {
        errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        newsBook = new book(req.body)
        newsBook.save().then(data => {
            console.log(data.name + " inserted!")
            res.redirect('/book');
        }).catch(err => {
            console.log(err);
            res.status(500).end();
        })
    },
    delete: (req, res) => {
        book.findByIdAndDelete(req.params.id, (err) => {
            if (err) {
                console.log(err);
                res.status(500).end();
            }
            console.log("document deleted");
            return res.redirect('/book');
        })
    },
}