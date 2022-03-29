import React, { Suspense } from 'react'

import Layout from './components/navigation/Layout'

function App(): JSX.Element {
  return (
    <Suspense fallback="loading">
      <Layout />
    </Suspense>
  )
}

export default App
