const express = require('express');

const {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleGetRandomJoke,
    handleUpdateJokeById,
    handleDeleteJokeById
} = require('../controllers/joke.controller');

const router = express.Router();
/*
'/api/jokes' will be prepended to all these routes in server.js
data at the :id spot in url is accessed with req.params.id
route params can be named anything and the name will be added to req.params
*/
router.get('/', handleGetAllJokes);
router.post('/new', handleCreateJoke);
router.get('/random', handleGetRandomJoke);
router.get('/:id', handleGetJokeById);
router.put('/update/:id', handleUpdateJokeById);
router.delete('/delete/:id', handleDeleteJokeById);

module.exports = { jokeRouter: router };
