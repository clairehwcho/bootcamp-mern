const { Author } = require('../models/author.model');

const createAuthor = async (data) => {
    console.log('service: createAuthor');
    const author = await Author.create(data);
    return author;
};

const getAllAuthors = async () => {
    const authors = await Author.find();
    return authors;
};

const getAuthorById = async (id) => {
    const author = await Author.findOne({ _id: id });
    return author;
};

const updateAuthorById = async (id, data) => {
    const author = await Author.findOneAndUpdate({ _id: id }, data, {new: true, runValidators: true});
    return author;
}

const deleteAuthorById = async (id) => {
    const author = await Author.findOneAndDelete({ _id: id });
    return author;
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
}