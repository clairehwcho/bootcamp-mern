import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import NewPlayer from './views/NewPlayer';
import AllPlayers from './views/AllPlayers';
import OnePlayer from './views/OnePlayer';
import EditPlayer from './views/EditPlayer';
import Game1 from './views/Game1';
import Game2 from './views/Game2';
import Game3 from './views/Game3';
import NotFound from './views/NotFound';
import './App.css';

function App () {
  return (
    <div className="container">
      <div className="header">
        <Link to="/players/list"><h4>Manage Players</h4></Link>
        <h3>|</h3>
        <Link to="/status/game/1"><h4>Manage Player Status</h4></Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/players/list" replace />} />
        <Route path="/players/:id/edit" element={<EditPlayer />} />
        <Route path="/players/:id" element={<OnePlayer />} />
        <Route path="/players/addplayer" element={<NewPlayer />} />
        <Route path="/players/list" element={<AllPlayers />} />
        <Route path="/status/game/1" element={<Game1 />} />
        <Route path="/status/game/2" element={<Game2 />} />
        <Route path="/status/game/3" element={<Game3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;