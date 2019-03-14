const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        creator: req.body.userId
    });

    post
        .save()
        .then(createPost => {
            res.status(200).json({
                message: "Post done",
            })
        })
        .catch(error => {
            res.status(500).json({
                message: "create failure"
            })
        })
};

exports.getPosts = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currenPage = +req.query.page;
    const postQuery = Post.find();
    let fetch;
    if (pageSize && currenPage) {
        postQuery.skip(pageSize * (currenPage - 1)).limit(pageSize);
    }
    postQuery.then(document => {
        fetch = document;
        return Post.count();
    }).then( count => {
        res.status(200).json({
            message: "Posts Successful",
            posts: fetch,
            maxPosts: count
        })
    }).catch(err => {
        res.status(400).json({
            message: "Post Failure"
        })
    })
}

exports.updatePost = (req, res, next) => {
    const post = new Post({
        _id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        creator: req.body.userId
    })
    Post.updateOne({ _id: req.param.id, creator: req.userData.userId }, post)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({
                    message: "Update successful"
                })
            } else {
                res.status(400).json({
                    message: "Update failured"
                })
            }
        }).catch(err => {
            res.status(400).json({
                message: "Update failure"
            })
        })
}

exports.getPost = (req, res , next) => {
    Post.findById(req.param.id).then(post => {
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(400).json({
                message: "Post not found"
            })
        }
    }).catch(err => {
        res.status(404).json({
            message: "get Post Failure"
        })
    })
}



exports.deletePost = (req, res, next) => {
    Post
        .deleteOne({ _id: req.param.id, creator: req.userData.userId })
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({ message: "Delete successful" })
            } else {
                res.status(401).json({ message: "Not done" })
            }
        }).catch(err => {
            res.status(500).json({
                message: "Failure"
            })
        })
}