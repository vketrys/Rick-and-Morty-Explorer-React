import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'

import MainPage from '../../pages/main/Main'
import Page from '../../pages/Page'

function Router(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />

        <Route path="/characters" element={<Page name="character" />} />
        <Route path="/episodes" element={<Page name="episode" />} />
        <Route path="/locations" element={<Page name="location" />} />
      </Routes>
    </Layout>
  )
}

export default Router
