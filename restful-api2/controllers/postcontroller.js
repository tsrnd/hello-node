var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

exports.listPosts = (req, res) => {
    const currentPage = req.query.page || 1;
    const perPage = 5;
    let totalItems;
    Post.find()
        .countDocuments()
        .then((count) => {
            totalItems = count;
            return Post.find()
                .skip((currentPage - 1) * perPage).
                limit(perPage);
        })
        .then((post) => {
            res.status(200).json({ message: 'get posts successfully ', posts, totalItems });
        })
        .catch((err) => {
            res.send(err);
        })
};

exports.createPost = (req, res) => {
    var newPost = new Post(req.body);
    newPost.save((err, data) => {
        if (err)
            res.send(err)
        res.json(data)
    })
}
