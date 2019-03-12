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
        next(err);
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
            next(err);
        }
};

ProductController.create = (req, res, next) => {
    res.render('../views/products/create');
};

ProductController.store = async (req, res, next) => {
    try {
        const connect= await DB.connect();
        const db = connect.db('quan');
        var result = await DB.create(db, req.body);
        res.render('../views/products/show', {title: 'Product', id: result.ops[0]._id, name: result.ops[0].name, logTime: req.requestTime});
    } catch (err) {
        next(err);
    }
};

ProductController.edit = async (req, res, next) => {
    try {
            const connect = await DB.connect();
            const db = connect.db('quan');
            var result = await DB.find(db, req.params.id);
            connect.close();
            res.render('../views/products/edit', {title: 'Product', id: result._id, name: result.name, detail: result.detail});
        } catch(err) {
            next(err);
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
        next(err);
    }
};

ProductController.delete = async (req, res, next) => {
    try {
        const connect = await DB.connect();
        const db = connect.db('quan');
        var result = await DB.delete(db, req.params.id);
        connect.close();
        res.redirect('/products');
    } catch(err) {
        next(err);
    }
};

export default ProductController;
