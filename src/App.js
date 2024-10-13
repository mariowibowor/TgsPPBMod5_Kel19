import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup, MdGames, MdBook } from 'react-icons/md';
import './App.css';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Buku from './pages/Buku';
import Game from './pages/Game';
import DetailMovie from './pages/DetailMovie';
import DetailGame from './pages/DetailGame';
import DetailBuku from './pages/DetailBuku';

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 19</p>
      </header>
      <Routes>
        <Route path="" element={<Movie />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<Buku />} />
        <Route path="/game" element={<Game />} />
        <Route path="/detailmovie/:id" element={<DetailMovie />} />
        <Route path="/detailgame/:id" element={<DetailGame />} />
        <Route path="/detailbuku/:id" element={<DetailBuku />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <MdGames className="icon" /> Games
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <MdBook className="icon" /> Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
