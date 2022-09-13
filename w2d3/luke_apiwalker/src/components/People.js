import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Homeworld from './Homeworld';

const People = (props) => {
    const [people, setPeople] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id + '/')
            .then(response => {
                setPeople(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]);

    if (people == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1>{people.name}</h1>
            <Homeworld url={people.homeworld} />
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    )
}


export default People;