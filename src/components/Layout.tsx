import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from '../pages/Main'
import CharacterPage from '../pages/Character'
import EpisodePage from '../pages/Episode'
import LocationPage from '../pages/Location'

import './layout.scss'

function Layout() {
  return (
    <div className="banner">
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
        <Route path="/locations" element={<LocationPage />} />
      </Routes>
    </div>
  )
}

export default Layout