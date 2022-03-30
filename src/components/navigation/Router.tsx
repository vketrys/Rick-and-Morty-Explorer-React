import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from '../../pages/main/Main'
import CharacterPage from '../../pages/Character'
import EpisodePage from '../../pages/Episode'
import LocationPage from '../../pages/Location'

function Router(): JSX.Element {
  return (
    <div>
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

export default Router
