const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [5, "{PATH} must be at least {MINLENGTH} characters long."]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required."],
        min: [1, "{PATH} must be greater than {MIN}."]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [5, "{PATH} must be at least {MINLENGTH} characters long."]
    }
},
    { timestamps: true }

);

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product: Product };