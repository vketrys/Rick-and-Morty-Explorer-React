import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from '../../pages/main/Main'
import PageList from '../../pages/PageList'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/characters" element={<PageList name="character" />} />
      <Route path="/episodes" element={<PageList name="episode" />} />
      <Route path="/locations" element={<PageList name="location" />} />
    </Routes>
  )
}

export default Router
