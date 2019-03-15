var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = Schema({
    title: {
        type: String,
        require: true,
    },
    Content: {
        type: String,
        require: true,
    },
    creator: {
        type: String,
        require: true,
    },
});

// module.exports = {
//     Post: model('post,', PostSchema),
// };
module.exports = mongoose.model('Post', PostSchema)