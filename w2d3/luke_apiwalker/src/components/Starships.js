import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Starships = (props) => {
    const [starships, setStarships] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id + '/')
            .then(response => {
                setStarships(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]);

    if (starships == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1>{starships.name}</h1>
            <p>Model: {starships.model}</p>
            <p>Manufacturer: {starships.manufacturer}</p>
            <p>Crew: {starships.crew}</p>
            <p>Passengers: {starships.passengers}</p>
        </div>
    )
}


export default Starships;