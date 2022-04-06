import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './store/index'

import Layout from './components/navigation/Layout'
import Loader from './components/loader/Loader'

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </Suspense>
  )
}

export default App
