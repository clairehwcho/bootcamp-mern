import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import { OneProduct } from './views/OneProduct';
import { EditProduct } from './views/EditProduct';
import { NotFound } from './views/NotFound';
import './App.css';

function App () {
  return (
    <div className="container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Product Manager</h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/products" className="btn btn-sm btn-outline-primary mx-1">
            All Products
          </Link>
          <Link to="/products/new" className="btn btn-sm btn-outline-info mx-1">New Product</Link>
        </div>
      </nav> */}

      {/*
      Front-end routes to display view components.
      these are separate from our server routes.
      */}
      <Routes>
        {/* Redirect example */}
        {/* <Route path="/" element={<Navigate to="/products" replace />} /> */}
        <Route path="/:id/edit" element={<EditProduct />} />
        <Route path="/:id" element={<OneProduct />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;