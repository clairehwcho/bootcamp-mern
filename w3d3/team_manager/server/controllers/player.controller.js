const { Player } = require('../models/player.model');

const {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayerById,
    deletePlayerById,
} = require('../services/player.service');

const handleCreatePlayer = async (req, res) => {
    try {
        const player = await createPlayer(req.body);
        console.log(player.length);
        return res.json(player);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllPlayers = async (req, res) => {
    try {
        const players = await getAllPlayers();
        return res.json(players);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetPlayerById = async (req, res) => {
    try {
        const player = await getPlayerById(req.params.id);
        return res.json(player);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdatePlayerById = async (req, res) => {
    try {
        const player = await updatePlayerById(req.params.id, req.body);
        return res.json(player);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeletePlayerById = async (req, res) => {
    try {
        const player = await deletePlayerById(req.params.id);
        return res.json(player);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = {
    handleCreatePlayer,
    handleGetAllPlayers,
    handleGetPlayerById,
    handleUpdatePlayerById,
    handleDeletePlayerById
}