import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
} from '../services/internalApiService';

export const EditAuthor = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                const { name } = data;
                setName(name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleDeleteClick = () => {
        deleteAuthorById(id)
            .then((deletedAuthor) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleEditAuthorSubmit = (e) => {
        e.preventDefault();
        const updatedAuthor = { name };
        updateAuthorById(id, updatedAuthor)
            .then((updatedName) => {
                console.log('updatedName:', updatedName);
                navigate(`/`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <form className="authorForm" onSubmit={handleEditAuthorSubmit}>
                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Name:</label>
                    <input className="form-control" type="text" value={name} onChange={handleNameChange} />
                    {
                        errors?.name && <span style={{ color: 'red' }}>{errors?.name?.message}</span>
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
                    navigate(`/`);
                }} className="btn btn-secondary mb-3">
                    Cancel
                </button>
            </div>
        </div>
    )
};

export default EditAuthor;