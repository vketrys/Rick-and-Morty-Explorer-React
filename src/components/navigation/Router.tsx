import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from 'pages/main/Main'
import ContentList from 'pages/contentList/ContentList'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/characters" element={<ContentList type="character" />} />
      <Route path="/episodes" element={<ContentList type="episode" />} />
      <Route path="/locations" element={<ContentList type="location" />} />
    </Routes>
  )
}

export default Router
