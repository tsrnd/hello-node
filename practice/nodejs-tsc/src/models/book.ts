import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Book = new Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    publishing_year: {
        type: Number,
        require: true,
    },
    image: {
        type: String
    }
});