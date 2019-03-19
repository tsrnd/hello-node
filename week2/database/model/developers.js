const mongoose = require('mongoose');
const developersSchema = new mongoose.Schema({
    name: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    }
});
const Developer = mongoose.model('Developer', developersSchema);

module.exports = Developer;
