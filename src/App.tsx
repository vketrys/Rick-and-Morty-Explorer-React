import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import CharacterPage from './pages/CharacterPage'
import EpisodePage from './pages/EpisodePage'
import LocationPage from './pages/LocationPage'

function App() {
  return (
    <div className="banner">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
        <Route path="/locations" element={<LocationPage />} />
      </Routes>
    </div>
  )
}

export default App
