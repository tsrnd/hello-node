const mongoose = require('mongoose');
const projectsSchema = new mongoose.Schema({
    name: String,
});
const Project = mongoose.model('Project', projectsSchema);

module.exports = Project;
