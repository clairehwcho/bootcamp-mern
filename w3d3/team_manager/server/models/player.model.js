const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters long."]
    },
    position: {
        type: String,
        required: false
    }
},
    { timestamps: true }

);

const Player = mongoose.model('Player', PlayerSchema);

module.exports = { Player: Player };