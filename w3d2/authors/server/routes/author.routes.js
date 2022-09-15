const express = require('express');

const {
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleUpdateAuthorById,
    handleDeleteAuthorById
} = require('../controllers/author.controller');

const router = express.Router();

router.post('/new', handleCreateAuthor);
router.get('/', handleGetAllAuthors);
router.get('/:id', handleGetAuthorById);
router.put('/edit/:id', handleUpdateAuthorById);
router.delete('/delete/:id', handleDeleteAuthorById);

module.exports = { authorRouter: router };
