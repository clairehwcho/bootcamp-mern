import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteAuthorById, getAllAuthors } from "../services/internalApiService";
import { getAuthorById } from '../services/internalApiService';


export const OneAuthor = (props) => {
    const [author, setAuthor] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                console.log(data);
                setAuthor(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (author === null) {
        return null;
    }

    const { title, price, description } = author;

    const handleDeleteClick = () => {
        deleteAuthorById(id)
            .then((deletedAuthor) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="oneAuthor">
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <div>
                <button onClick={(e) => {
                    navigate('/');
                }} className="btn btn-sm btn-primary mx-1">
                    Return
                </button>

                <button onClick={(e) => {
                    navigate(`/${id}/edit`);
                }} className="btn btn-sm btn-warning mx-1">
                    Edit
                </button>

                <button onClick={(e) => {
                    handleDeleteClick();
                }} className="btn btn-sm btn-danger mx-1">
                    Delete
                </button>
            </div>
        </div>
    )
};

export default OneAuthor;