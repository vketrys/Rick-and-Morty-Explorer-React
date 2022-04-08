import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'

import Layout from './components/navigation/Layout'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
