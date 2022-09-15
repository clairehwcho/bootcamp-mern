import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createAuthor } from '../services/internalApiService';

export const NewAuthor = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const [errors, setErrors] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCreateAuthorSubmit = (e) => {
        e.preventDefault();
        const newAuthor = { name };
        createAuthor(newAuthor).then((data) => {

            console.log('new author data:', data);
            navigate('/');
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
            <form className="authorForm" onSubmit={handleCreateAuthorSubmit}>
                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Name:</label>
                    <input className="form-control" type="text" onChange={handleNameChange} />
                    {
                        errors?.name && <span style={{ color: 'red' }}>{errors?.name?.message}</span>
                    }
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary mb-3">
                        Submit
                    </button>
                </div>
            </form>
            <div className="form-group row">
                <button onClick={(e) => {
                    navigate(`/`);
                }} className="btn btn-secondary mb-3">
                    Cancel
                </button>
            </div>
        </div>
    )
};

export default NewAuthor;