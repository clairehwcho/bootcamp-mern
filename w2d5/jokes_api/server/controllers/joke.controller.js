const { Joke } = require('../models/joke.model');

const {
    createJoke,
    getAllJokes,
    getJokeById,
    getRandomJoke,
    updateJokeById,
    deleteJokeById,
} = require('../services/joke.service');

const handleCreateJoke = async (req, res) => {
    try {
        const joke = await createJoke(req.body);
        console.log(joke.length);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllJokes = async (req, res) => {
    try {
        const jokes = await getAllJokes();
        return res.json(jokes);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetJokeById = async (req, res) => {
    try {
        const joke = await getJokeById(req.params.id);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetRandomJoke = async (req, res) => {
    try {
        const joke = await getRandomJoke();
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateJokeById = async (req, res) => {
    try {
        const joke = await updateJokeById(req.params.id, req.body);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteJokeById = async (req, res) => {
    try {
        const joke = await deleteJokeById(req.params.id);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Export an object of our controller methods so they can be addd to routes
module.exports = {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleGetRandomJoke,
    handleUpdateJokeById,
    handleDeleteJokeById
}