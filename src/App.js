import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import GamePage from './Pages/Games';
import MoviePage from './Pages/Movies';
import ShowPage from './Pages/Shows';
import NavBar from "./Components/NavBar";
import './App.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/show" element={<ShowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
