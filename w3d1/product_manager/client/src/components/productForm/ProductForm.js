import React, { useState } from 'react';

const ProductForm = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { title, price, description };
        console.log(newProduct);
    }

    return (
        <form className="productForm" onSubmit={handleSubmit}>
            <h1>Product Manager</h1>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Title</label>
                <input className="form-control" type="text" value={props.title} onChange={handleTitleChange} />
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Price</label>
                <input className="form-control" type="text" value={price} onChange={handlePriceChange} />
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Description</label>
                <input className="form-control" type="text" value={description} onChange={handleDescriptionChange} />
            </div>

            <div className="mb-3 row">
                <button className="btn btn-primary mb-3">
                    Create
                </button>
            </div>
        </form>
    )

};

export default ProductForm;