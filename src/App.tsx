import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './store/index'

import Layout from './components/navigation/Layout'

function App(): JSX.Element {
  return (
    <Suspense fallback="loading">
      <Provider store={store}>
        <Layout />
      </Provider>
    </Suspense>
  )
}

export default App
