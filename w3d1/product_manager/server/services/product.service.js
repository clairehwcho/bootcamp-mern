const { Product } = require('../models/product.model');

const createProduct = async (data) => {
    console.log('service: createProduct');
    const product = await Product.create(data);
    return product;
};

const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};

const getProductById = async (id) => {
    const product = await Product.findOne({ _id: id });
    return product;
};

const updateProductById = async (id, data) => {
    const product = await Product.findOneAndUpdate({ _id: id }, data, {new: true, runValidators: true});
    return product;
}

const deleteProductById = async (id) => {
    const product = await Product.findOneAndDelete({ _id: id });
    return product;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
}