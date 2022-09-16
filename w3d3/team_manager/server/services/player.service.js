const { Player } = require('../models/player.model');

const createPlayer = async (data) => {
    console.log('service: createPlayer');
    const player = await Player.create(data);
    return player;
};

const getAllPlayers = async () => {
    const players = await Player.find();
    return players;
};

const getPlayerById = async (id) => {
    const player = await Player.findOne({ _id: id });
    return player;
};

const updatePlayerById = async (id, data) => {
    const player = await Player.findOneAndUpdate({ _id: id }, data, {new: true, runValidators: true});
    return player;
}

const deletePlayerById = async (id) => {
    const player = await Player.findOneAndDelete({ _id: id });
    return player;
};

module.exports = {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayerById,
    deletePlayerById,
}