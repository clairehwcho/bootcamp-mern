import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/internalApiService';

export const NewProduct = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');

    const [errors, setErrors] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleCreateProductSubmit = (e) => {
        e.preventDefault();
        const newProduct = { title, price, description };
        createProduct(newProduct).then((data) => {

            console.log('new product data:', data);
            navigate('/');
        })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div>
            <form className="productForm" onSubmit={handleCreateProductSubmit}>
                <h1>Product Manager</h1>
                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Title</label>
                    <input className="form-control" type="text" onChange={handleTitleChange} />
                    {
                        errors?.title && <span style={{ color: 'red' }}>{errors?.title?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <input className="form-control" type="text" onChange={handlePriceChange} />
                    {
                        errors?.price && <span style={{ color: 'red' }}>{errors?.price?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <input className="form-control" type="text" onChange={handleDescriptionChange} />
                    {
                        errors?.description && <span style={{ color: 'red' }}>{errors?.description?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <button className="btn btn-primary mb-3">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
};

export default NewProduct;