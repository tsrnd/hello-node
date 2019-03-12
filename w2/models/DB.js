require('dotenv').config();
import { ObjectId } from 'mongodb';
const DB  = {};
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true`;
DB.connect = async () => {
    try {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
                resolve(db);
            });
        });
    } catch (err) {
        throw err;
    }
}
DB.create = async (db, params) => {
    try {
        return new Promise((resolve, reject) => {
            db
                .collection('products')
                .insertOne({
                    name: params.name,
                    detail: params.detail
                }, (err, res) => {
                    resolve(res);
                });
        });
    } catch (err) {
        throw err;
    }
};

DB.find = async (db, id) => {
    try {
        return new Promise((resolve, reject) => {
            db
                .collection('products')
                .find({ _id: ObjectId.isValid(id) ? ObjectId(id) : +id})
                .toArray((err, res) => {
                    resolve(res[0]);
                });
        });
    } catch (err) {
        throw err;
    }
};

DB.delete = async (db, id) => {
    try {
        return new Promise((resolve, reject) => {
            db
                .collection('products')
                .deleteOne({ _id: ObjectId.isValid(id) ? ObjectId(id) : +id}, (err, res) => {
                    resolve(res);
                });
        });
    } catch (err) {
        throw err;
    }
};

DB.update = async (db, id, params) => {
    try {
        return new Promise((resolve, reject) => {
            db
                .collection('products')
                .updateOne({ _id: ObjectId.isValid(id) ? ObjectId(id) : +id}, {
                    $set: {
                        name: params.name,
                        detail: params.detail
                    }
                }, (err, res)  => {
                    resolve(res);
                });
        });
    } catch (err) {
        throw err;
    }
};

DB.findAll = async (db) => {
    try {
        return new Promise((resolve, reject) => {
            db
                .collection('products')
                .find().toArray((err, res) => {
                    resolve(res);
                });
        });
    } catch (err) {
        throw err;
    }
};
export default DB;
