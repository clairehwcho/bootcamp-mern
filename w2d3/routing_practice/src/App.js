import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Param from './components/Param';
import './App.css';

function App () {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:param" element={<Param />} />
        <Route path="/:param/:paramTextColor" element={<Param />} />
        <Route path="/:param/:paramTextColor/:paramBgColor" element={<Param />} />
      </Routes>
    </div>
  );
}

export default App;
