import { useState, useEffect } from "react";
import { deletePlayerById, getAllPlayers } from "../services/internalApiService";
import { Link, useNavigate } from "react-router-dom";
import ManagePlayersMenu from "../components/ManagePlayersMenu";

export const AllPlayers = (props) => {
    const [players, setPlayers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllPlayers()
            .then((data) => {
                console.log(data);
                setPlayers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteClick = (idToDelete, name) => {
        if (window.confirm(`Are you sure you want to remove ${name}?`)) {
            deletePlayerById(idToDelete)
                .then((deletedPlayer) => {
                    const filteredPlayers = players.filter((player) => {
                        return player._id !== idToDelete;
                    });
                    console.log('deletedPlayer:', deletedPlayer);
                    setPlayers(filteredPlayers);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="contentContainer">
            <ManagePlayersMenu />
            <div>
                <table className="table table-striped" id="allPlayersTable">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => {
                            const { _id, name, position } = player;
                            return (
                                <tr>
                                    <td>
                                        <div key={_id}>
                                            <Link to={`/players/${_id}`}>
                                                <span>{name}</span>
                                            </Link>
                                        </div>
                                    </td>

                                    <td>
                                        <div key={_id}>
                                            <span>{position}</span>
                                        </div>
                                    </td>

                                    <td>
                                        <button onClick={(e) => {
                                            navigate(`/players/${_id}/edit`);
                                        }} className="btn btn-sm btn-warning mx-1">
                                            Edit
                                        </button>

                                        <button onClick={(e) => {
                                            handleDeleteClick(_id, name);
                                        }} className="btn btn-sm btn-danger mx-1">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default AllPlayers;