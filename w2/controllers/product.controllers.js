import DB from '../models/DB';
const ProductController = {};

ProductController.index = async (req, res, next) => {
    try {
        const connect = await DB.connect();
        const db = connect.db('quan');
        var result = await DB.findAll(db);
        res.render('../views/products/index', {products: result})
        connect.close();
    } catch (err) {
    }
}
ProductController.show = async (req, res, next) => {
    try {
            const connect = await DB.connect();
            const db = connect.db('quan');
            var result = await DB.find(db, req.params.id);
            connect.close();
            res.render('../views/products/show', {title: 'Product', id: result._id, name: result.name, logTime: req.requestTime});
        } catch(err) {
            console.log(err);
            res.send(err.message);
        }
};

ProductController.create = (req, res, next) => {
    res.render('../views/products/create');
};

ProductController.store = (req, res, next) => {
    console.log(req.body.name);
    res.send(req.body.name);
};

ProductController.edit = async (req, res, next) => {
    try {
            const connect = await DB.connect();
            const db = connect.db('quan');
            var result = await DB.find(db, req.params.id);
            connect.close();
            res.render('../views/products/edit', {title: 'Product', id: result._id, name: result.name, detail: result.detail});
        } catch(err) {
            console.log(err);
            res.send(err.message);
        }
};

ProductController.update = async (req, res, next) => {
    try {
        const connect = await DB.connect();
        const db = connect.db("quan");
        await DB.update(db, req.params.id, {
            name: req.body.name,
            detail: req.body.detail
        });
        res.redirect('/products');
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
};

ProductController.delete = async (req, res, next) => {
    try {
        const connect = await DB.connect();
        const db = connect.db('quan');
        var result = await DB.delete(db, req.params.id);
        console.log(result);
        connect.close();
        res.redirect('/products');
    } catch(err) {
        console.log(err);
        res.send(err.message);
    }
};

export default ProductController;
