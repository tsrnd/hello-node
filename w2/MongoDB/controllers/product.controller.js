const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err, data) {
        if (err) throw err;
        res.send(data);
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) res.send('Not found!');
        res.send(product);
    })
};

exports.product_list = function (req, res) {
    Product.find(function (err, product) {
        if (err) throw err;
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) throw err;
        res.send('Product updated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;
        res.send('Deleted successfully!');
    })
};
