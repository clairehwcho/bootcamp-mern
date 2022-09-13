import { Routes, Route } from 'react-router-dom';
import React from 'react';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import SearchBar from './components/SearchBar';
import Error from './components/Error';
import './App.css';

function App () {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/error" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
