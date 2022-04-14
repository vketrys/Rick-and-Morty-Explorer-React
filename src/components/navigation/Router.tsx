import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from 'pages/main/Main'
import ContentList from 'pages/contentList/ContentList'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/characters" element={<ContentList name="character" />} />
      <Route path="/episodes" element={<ContentList name="episode" />} />
      <Route path="/locations" element={<ContentList name="location" />} />
    </Routes>
  )
}

export default Router
