import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import './config/i18n'
import reportWebVitals from './reportWebVitals'
import Loader from './components/loader/Loader'

const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
