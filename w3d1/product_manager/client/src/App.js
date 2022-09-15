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
      <Routes>
        <Route path="/:id/edit" element={<EditProduct />} />
        <Route path="/:id" element={<OneProduct />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;