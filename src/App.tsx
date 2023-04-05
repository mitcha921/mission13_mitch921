import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './Stuff';
import Podcasts from './Podcasts';
import Home from './Home';
import MovieCollection from './movie/MovieCollection';

function App() {
  return (
    <Router>
      <div>
        <TopBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movie-collection" element={<MovieCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
