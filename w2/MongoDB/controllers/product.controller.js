const Product = require('../models/product.model');

exports.product_store = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err, data) {
        if (err) throw err;
        res.redirect('/products');
    })
};

exports.product_create = function (req, res) {
    res.render('products/create');
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) res.send('Not found!');
        res.render('products/show', {product: product});
    })
};

exports.product_list = function (req, res) {
    Product.find(function (err, product) {
        if (err) throw err;
        res.render('products/index', {products: product});
    })
};

exports.product_edit = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) res.send('Not found!');
        res.render('products/edit', {product: product});
    })
};

exports.product_update = function (req, res) {
    console.log(req.body);
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) throw err;
        res.redirect('/products');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;
        res.redirect('/products');
    })
};
