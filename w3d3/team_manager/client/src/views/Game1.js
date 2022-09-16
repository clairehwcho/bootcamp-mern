import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPlayers } from "../services/internalApiService";
import ManagePlayerStatusMenu from '../components/ManagePlayerStatusMenu';


export const Game1 = (props) => {
    const [players, setPlayers] = useState([]);
    const [status, setStatus] = useState(true);

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

    const handlePlayerStatusChange = (e) => {
        setStatus(e.target.value);
        console.log(status);


    }

    return (
        <div className="contentContainer">
            <h3>Player Status - Game 1</h3>
            <ManagePlayerStatusMenu />
            <div>
                <table className="table table-striped" id="allPlayersTable">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => {
                            const { _id, name } = player;
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
                                        <div className="playerStatusBtns">
                                            <input type="radio" id="playing" name="status" value="playing"
                                                onChange={handlePlayerStatusChange}
                                                checked={status === "playing"}
                                            />
                                            <label className="statusLabel" htmlFor="playing">Playing</label>

                                            <input type="radio" id="notPlaying" name="status" value="notPlaying"
                                                onChange={handlePlayerStatusChange}
                                                checked={status === "playing"}
                                            />
                                            <label className="statusLabel" htmlFor="notPlaying">Not Playing</label>

                                            <input type="radio" id="undecided" name="status" value="undecided"
                                                onChange={handlePlayerStatusChange}
                                                checked={status === "playing"}
                                            />
                                            <label className="statusLabel" htmlFor="undecided">Undecided</label>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Game1;