// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { deletePlayerById, getAllPlayers } from "../services/internalApiService";
// import { getPlayerById } from '../services/internalApiService';
import ManagePlayerStatusMenu from '../components/ManagePlayerStatusMenu';


export const Game2 = (props) => {

    return (
        <div className="contentContainer">
            <h3>Player Status - Game 2</h3>
            <ManagePlayerStatusMenu />
        </div>
    )
};

export default Game2;