import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteProductById, getAllProducts } from "../services/internalApiService";
import { getProductById } from '../services/internalApiService';


export const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (product === null) {
        return null;
    }

    const { title, price, description } = product;

    const handleDeleteClick = () => {
        deleteProductById(id)
            .then((deletedProduct) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="oneProduct">
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

export default OneProduct;