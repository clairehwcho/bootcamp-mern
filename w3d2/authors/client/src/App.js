import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import { NewAuthor } from './views/NewAuthor';
import { OneAuthor } from './views/OneAuthor';
import { EditAuthor } from './views/EditAuthor';
import { NotFound } from './views/NotFound';
import './App.css';

function App () {
return (
    <div className="container">
    <Routes>
        <Route path="/new" element={<NewAuthor />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
        <Route path="/:id" element={<OneAuthor />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
);
}
export default App;