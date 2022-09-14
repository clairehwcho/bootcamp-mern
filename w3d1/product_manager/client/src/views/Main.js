import React from 'react';
import NewProduct from './NewProduct';
import AllProducts from './AllProducts';


export default () => {
    return (
        <div>
            <NewProduct />
            <hr></hr>
            <AllProducts />
        </div>
    )
}