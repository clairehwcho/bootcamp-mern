import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deletePlayerById, getAllPlayers } from "../services/internalApiService";
import { getPlayerById } from '../services/internalApiService';


export const OnePlayer = (props) => {
    const [player, setPlayer] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPlayerById(id)
            .then((data) => {
                console.log(data);
                setPlayer(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (player === null) {
        return null;
    }

    const { name, position } = player;

    const handleDeleteClick = () => {
        deletePlayerById(id)
            .then((deletedPlayer) => {
                navigate('/players/list');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="contentContainer">
            <div className="onePlayer">
                <h4>{name}</h4>
                <p>- Preferred Position: {position}</p>
                <div>
                    <button onClick={(e) => {
                        navigate('/players/list');
                    }} className="btn btn-sm btn-primary mx-1">
                        Return
                    </button>

                    <button onClick={(e) => {
                        navigate(`/players/${id}/edit`);
                    }} className="btn btn-sm btn-warning mx-1">
                        Edit
                    </button>

                    <button onClick={(e) => {
                        handleDeleteClick();
                    }} className="btn btn-sm btn-danger mx-1">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
};

export default OnePlayer;