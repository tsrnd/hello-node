var express = require('express');
var router = express.Router();

router.get('/:id', (req, res) =>
    res.render('./products/show', {title: 'Hello', id: req.params.id}));
router.get('/:id/back', (req, res) => res.redirect(`/products/${+req.params.id + 1}`));
router.post('/:id', (req, res) => res.send(req.params.id));
router.delete('/:id', (req, res) => res.send(req.params.id));

module.exports = router;
 