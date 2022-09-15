import React from 'react';
import { Link } from 'react-router-dom'
import AllAuthors from './AllAuthors';


export default () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/new'}>Add an author</Link>
            <AllAuthors />
        </div>
    )
}