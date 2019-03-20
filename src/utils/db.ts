import * as mongoose from 'mongoose'

const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

class DBConnection {
    connect() {
        mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
        let db = mongoose.connection;
        db.on('error', (err) => {
            console.error('connect error: ', err)
        });
        db.once('open', function () {
            console.log('connect mongo db success.')
        })
    }
}

export default DBConnection