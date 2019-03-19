const mongoose = require('mongoose');
const teamsSchema = new mongoose.Schema({
    name: String,
});
const Team = mongoose.model('Team', teamsSchema);

module.exports = Team;
