import Product from '../models/product.models';
import { ObjectId } from 'mongodb';
const ProductController = {};

ProductController.index = async (req, res, next) => {
    try {
        var result = await Product.find();
        res.render('../views/products/index', {products: result});
    } catch (err) {
        next(err)
    }
}
ProductController.show = async (req, res, next) => {
    try {
            var result = await Product.find({ _id: new ObjectId(req.params.id) });
            res.render('../views/products/show', {title: 'Product', id: result[0]._id, name: result[0].name, logTime: req.requestTime});
        } catch(err) {
            next(err);
        }
};

ProductController.create = (req, res, next) => {
    res.render('../views/products/create');
};

ProductController.store = async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.render('../views/products/show', {title: 'Product', id: product._id, name: product.name, logTime: req.requestTime});
    } catch (err) {
        next(err);
    }
};

ProductController.edit = async (req, res, next) => {
    try {
            var product = await Product
                .find({ _id: new ObjectId(req.params.id) });
            res.render('../views/products/edit', {title: 'Product', id: product[0]._id, name: product[0].name, detail: product[0].detail});
        } catch(err) {
            next(err);
        }
};

ProductController.update = async (req, res, next) => {
    try {
        await Product
            .findOneAndUpdate({
                _id: new ObjectId(req.params.id)
            },
            req.body
            );
        res.redirect('/products');
    } catch (err) {
        throw err;
    }
};

ProductController.delete = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(new ObjectId(req.params.id));
        res.redirect('/products');
    } catch(err) {
        next(err);
    }
};

export default ProductController;
