import React, { useEffect, useState } from 'react';
import ProductForm from '../components/productForm/ProductForm';

export default () => {
    useEffect(() => {
        document.title = 'Product Manager';
    });
    return (
        <div className="container">
            <ProductForm />
        </div>
    )
}