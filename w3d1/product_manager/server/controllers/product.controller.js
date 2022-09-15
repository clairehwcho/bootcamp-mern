const { Product } = require('../models/product.model');

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
} = require('../services/product.service');

const handleCreateProduct = async (req, res) => {
    try {
        const product = await createProduct(req.body);
        console.log(product.length);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        return res.json(products);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetProductById = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateProductById = async (req, res) => {
    try {
        const product = await updateProductById(req.params.id, req.body);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteProductById = async (req, res) => {
    try {
        const product = await deleteProductById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleUpdateProductById,
    handleDeleteProductById
}