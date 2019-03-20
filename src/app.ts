import * as express from 'express'
import * as bodyParser from 'body-parser'
import Routes from './routes/routes'
import DBConnection from './utils/db'
import { Db } from 'mongodb';

class App {
    public app: express.Application;
    routes = new Routes()
    db = new DBConnection()
    constructor() {
        this.app = express()
        this.config()
        this.routes.setup(this.app)
        this.db.connect()
    }

    private config(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
    }
}

export default new App().app