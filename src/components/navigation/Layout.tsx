import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from '../../pages/main/Main'
import CharacterPage from '../../pages/character/Character'
import EpisodePage from '../../pages/episode/Episode'
import LocationPage from '../../pages/location/Location'

import style from './Layout.module.scss'
import CharacterList from '../lists/CharacterLists'

function Layout(): JSX.Element {
  return (
    <div className={style.banner}>
      <CharacterList />
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
