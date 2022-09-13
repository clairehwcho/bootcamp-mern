import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/" + formState.option + "/" + formState.id);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search for:</label>
            <select name="option" value={formState.option} onChange={handleChange}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            <label>ID:</label>
            <input type="number" name="id" value={formState.id} onChange={handleChange} />
            <button>Search</button>
        </form>
    )

}

export default SearchBar;