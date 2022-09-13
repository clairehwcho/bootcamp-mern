import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Homeworld = (props) => {
    const [homeworld, setHomeworld] = useState("");

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setHomeworld(response.data);
            })
            .catch((console.log))
    }, [props.url]);

    const getHomeworldId = () => {
        if (props.url) {
            const url = props.url;
            let i = url.length - 2;
            let homeworldId = "";

            while (url[i] != "/") {
                homeworldId = url[i] + homeworldId;
                i--;
            }
            return homeworldId;
        }

    }

    return (
        <div>
            <p>Homeworld:<Link to={"/planets/" + getHomeworldId() + "/"}> {homeworld.name}</Link></p>
        </div>
    )

}

export default Homeworld;