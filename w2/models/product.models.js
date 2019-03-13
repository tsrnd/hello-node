require('dotenv').config();
import mongoose from 'mongoose';
const url = process.env.DB_URL;
const Schema = mongoose.Schema;
mongoose.connect(url, { useNewUrlParser: true });
const ProductSchema = new Schema({
    name: {
        type: String,
        maxlength: [30, 'max length 30']
    },
    detail: String
});
const Product = mongoose.model('Product', ProductSchema);

export default Product;

