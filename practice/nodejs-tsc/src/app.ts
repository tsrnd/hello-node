import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./route/route";
import * as mongoose from "mongoose";
import * as multer from "multer";

class App {
    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoURL: string = "mongodb://localhost/nodejs_mongo";
    public storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './../public/upload/book');
        },
        filename: function (req, file, callback) {
            callback(null, file.originalname);
        }
    });
    public accepted_extensions = ['jpg', 'png', 'jpeg'];

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routes.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/static', express.static('./../public'));
        this.app.set('views', __dirname + '/views');
        this.app.set('view engine', 'pug');
        this.app.use(multer({
            storage: this.storage,
            limits: {
                fileSize: 10 * 1024 * 1024,  // 10 MB upload limit
            },
            fileFilter: (req, file, cb) => {
                // if the file extension is in our accepted list
                if (this.accepted_extensions.some(ext => file.originalname.endsWith("." + ext))) {
                    return cb(null, true);
                }
                // otherwise, return error
                return cb(new Error('Only ' + this.accepted_extensions.join(", ") + ' files are allowed!'));
            }
        }).single('book-image'))
    }

    private mongoSetup(): void {
        (mongoose as any).Promise = global.Promise;
        var db = mongoose.connect(this.mongoURL, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) throw err;
        });
        // mongoose.connection;
        console.log("Connect MongoDB successful!");
    }

}

export default new App().app;