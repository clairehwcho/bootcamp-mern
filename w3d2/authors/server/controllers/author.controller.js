const { Author } = require('../models/author.model');

const {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
} = require('../services/author.service');

const handleCreateAuthor = async (req, res) => {
    try {
        const author = await createAuthor(req.body);
        console.log(author.length);
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllAuthors = async (req, res) => {
    try {
        const authors = await getAllAuthors();
        return res.json(authors);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAuthorById = async (req, res) => {
    try {
        const author = await getAuthorById(req.params.id);
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateAuthorById = async (req, res) => {
    try {
        const author = await updateAuthorById(req.params.id, req.body);
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteAuthorById = async (req, res) => {
    try {
        const author = await deleteAuthorById(req.params.id);
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = {
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleUpdateAuthorById,
    handleDeleteAuthorById
}