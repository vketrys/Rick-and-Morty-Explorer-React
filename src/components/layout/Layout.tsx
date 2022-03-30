import React from 'react'

import Router from '../navigation/Router'
import style from './Layout.module.scss'

function Layout(): JSX.Element {
  return (
    <div className={style.banner}>
      <Router />
    </div>
  )
}

export default Layout
