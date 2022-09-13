const express = require('express');

const {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleUpdateProductById,
    handleDeleteProductById
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/new', handleCreateProduct);
router.get('/', handleGetAllProducts);
router.get('/:id', handleGetProductById);
router.put('/update/:id', handleUpdateProductById);
router.delete('/delete/:id', handleDeleteProductById);

module.exports = { productRouter: router };
