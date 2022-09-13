import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Planets = (props) => {
    const [planets, setPlanets] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id + '/')
            .then(response => {
                setPlanets(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]);

    if (planets == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1>{planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    )
}


export default Planets;