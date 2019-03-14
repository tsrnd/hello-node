const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, require: false },
    content: { type: String, require: false },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true }
})

module.exports = mongoose.model("Post", postSchema);