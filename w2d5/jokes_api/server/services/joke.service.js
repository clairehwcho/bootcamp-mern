const { Joke } = require('../models/joke.model');

const createJoke = async (data) => {
    console.log('service: createJoke');
    // Use the mongoose model to interact with the database
    const joke = await Joke.create(data);
    return joke;
};

const getAllJokes = async () => {
    const jokes = await Joke.find();
    return jokes;
};

const getJokeById = async (id) => {
    const joke = await Joke.findOne({ _id: id });
    return joke;
};

const getRandomJoke = async () => {
    const joke = await Joke.aggregate([{ $sample: { size: 1 } }]);
    return joke;
}

const updateJokeById = async (id, data) => {
    const joke = await Joke.findOneAndUpdate({ _id: id }, data, {
        // Return the updated destination
        new: true,
        // Re-run validations
        runValidators: true
    });
    return joke;
}

const deleteJokeById = async (id) => {
    const joke = await Joke.findOneAndDelete({ _id: id });
    return joke;
};

// Export all the service methods in an object
module.exports = {
    // long-form - key: value
    createJoke: createJoke,
    // shorthand can be used when key name matches var name
    getAllJokes,
    getJokeById,
    getRandomJoke,
    updateJokeById,
    deleteJokeById,
}