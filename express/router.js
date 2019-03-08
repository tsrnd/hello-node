const {
    Router
} = require('express');

const demoRouter = new Router();

demoRouter.get("/hello", (req, res) => {
    const name = req.query.name
    return res.status(200).json({
        name
    })
});

demoRouter.post("/hello", (req, res) => {
    const name = req.body.name
    res.send(`Hello ${name}`);
});


module.exports = demoRouter;