import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    getProductById,
    updateProductById,
    deleteProductById,
} from '../services/internalApiService';

export const EditProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                const { title, price, description, } = data;
                setTitle(title);
                setPrice(price);
                setDescription(description);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleDeleteClick = () => {
        deleteProductById(id)
            .then((deletedProduct) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleEditProductSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { title, price, description };
        updateProductById(id, updatedProduct)
            .then((updatedTitle) => {
                console.log('updatedTitle:', updatedTitle);
                navigate(`/${id}`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };


    return (
        <div>
            <form className="productForm" onSubmit={handleEditProductSubmit}>
                <h1>Product Manager</h1>
                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Title</label>
                    <input className="form-control" type="text" value={title} onChange={handleTitleChange} />
                    {
                        errors?.title && <span style={{ color: 'red' }}>{errors?.title?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <input className="form-control" type="text" value={price} onChange={handlePriceChange} />
                    {
                        errors?.price && <span style={{ color: 'red' }}>{errors?.price?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <input className="form-control" type="text" value={description} onChange={handleDescriptionChange} />
                    {
                        errors?.description && <span style={{ color: 'red' }}>{errors?.description?.message}</span>
                    }
                </div>

                <div className="form-group row">
                    <button className="btn btn-primary mb-3">
                        Edit
                    </button>
                </div>
            </form>
            <div className="form-group row">
                <button onClick={(e) => {
                    handleDeleteClick();
                }} className="btn btn btn-danger mb-3">
                    Delete
                </button>
                <button onClick={(e) => {
                    navigate(`/${id}`);
                }} className="btn btn-secondary mb-3">
                    Return
                </button>
            </div>
        </div>
    )
};

export default EditProduct;