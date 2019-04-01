import * as mongoose from 'mongoose';
import { Book } from './../models/book';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator/check';

const book = mongoose.model('Book', Book);

export class BookController {
    public get(req: Request, resp: Response) {
        book.find({}, (err, result) => {
            if (err) {
                console.log(err);
                resp.status(500).end();
            }
            resp.render("book/index", {
                books: result
            })
        });
    }

    public detail(req: Request, resp: Response) {
        book.findOne({ "name": req.params.name }, (err, result) => {
            if (err) {
                resp.status(500).end();
            }
            resp.render("book/detail", {
                book: result
            })
        });
    }

    public store(req: Request, resp: Response) {
        var errors = validationResult(req)
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }
        if (req['file'] != null && req['file'].filename != req.body['image']) {
            return resp.status(400).json({
                errors: [{
                    "msg": "Image name doesn't match!"}]
            });
        }
        var newsBook = new book(req.body)
        newsBook.save().then(data => {
            console.log(data.name + " inserted!")
            resp.redirect('/book');
        }).catch(err => {
            console.log(err);
            resp.status(500).end();
        })
    }

    public update(req: Request, resp: Response) {
        var errors = validationResult(req)
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }
        if (req['file'] != null && req['file'].filename != req.body['image']) {
            return resp.status(400).json({
                errors: [{
                    "msg": "Image name doesn't match!"}]
            });
        }
        book.findOneAndUpdate({"name": req.params.name}, req.body, (err, result) => {
            if (err) {
                console.log(err);
                resp.status(500).end();
            }
            console.log("document updated");
            resp.redirect("/book");
        })
    }

    public delete(req: Request, resp: Response) {
        book.findOneAndDelete({"name": req.params.name}, (err, result) => {
            if (err) {
                console.log(err);
                resp.status(500).end();
            }
            console.log("document deleted");
            return resp.redirect('/book');
        })
    }
}