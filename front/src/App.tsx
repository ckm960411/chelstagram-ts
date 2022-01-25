import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Players, PlayerDetail, Profile, Talk, Bookmark, NotFound } from '@/pages';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/talk" element={<Talk />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/players/:id" element={<PlayerDetail />} />
        <Route path="/players" element={<Players />} />
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
