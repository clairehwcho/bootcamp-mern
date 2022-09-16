const express = require('express');

const {
    handleCreatePlayer,
    handleGetAllPlayers,
    handleGetPlayerById,
    handleUpdatePlayerById,
    handleDeletePlayerById
} = require('../controllers/player.controller');

const router = express.Router();

router.post('/players/addplayer', handleCreatePlayer);
router.get('/players/list', handleGetAllPlayers);
router.get('/players/:id', handleGetPlayerById);
router.put('/players/:id/edit', handleUpdatePlayerById);
router.delete('/players/:id/delete', handleDeletePlayerById);

module.exports = { playerRouter: router };
