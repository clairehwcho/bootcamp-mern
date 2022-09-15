import { useState, useEffect } from "react";
import { deleteProductById, getAllProducts } from "../services/internalApiService";
import { Link } from "react-router-dom";

export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteClick = (idToDelete) => {
        deleteProductById(idToDelete)
            .then((deletedProduct) => {
                const filteredProducts = products.filter((product) => {
                    return product._id !== idToDelete;
                });
                console.log('deletedProduct:', deletedProduct);
                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="allProducts">
            <h2>All Products</h2>
            {products.map((product) => {
                const { _id, title, price, description } = product;
                return (
                    <div key={_id}>
                        <div className="allProductsRow">
                            <Link to={`/${_id}`}>
                                <h4>{title}</h4>
                            </Link>
                            <div>
                                <button onClick={(e) => {
                                    handleDeleteClick(_id);
                                }} className="btn btn-sm btn-danger mx-1">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllProducts;