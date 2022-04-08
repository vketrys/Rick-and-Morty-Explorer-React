import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'

import Layout from './components/layout/Layout'
import Router from './components/navigation/Router'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}

export default App
