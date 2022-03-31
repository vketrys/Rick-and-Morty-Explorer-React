import React, { Suspense } from 'react'

import Router from './components/navigation/Router'

function App(): JSX.Element {
  return (
    <Suspense fallback="loading">
      <Router />
    </Suspense>
  )
}

export default App
