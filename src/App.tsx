import React from 'react'
import Layout from './components/layout/Layout'

import Router from './components/navigation/Router'

function App(): JSX.Element {
  return (
    <Layout>
      <Router />
    </Layout>
  )
}

export default App
