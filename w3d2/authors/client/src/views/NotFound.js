import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = (props) => {
    return (
        <div>
            <p>We're sorry, but we could not find the author you are looking for.</p>
            <p>Would you like to add this author to our database?</p>
            <Link to="/new">Create an author</Link>
    </div >
    )
};

export default NotFound;