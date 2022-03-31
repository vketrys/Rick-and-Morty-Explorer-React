import React from 'react'

import style from './Layout.module.scss'

interface LayoutProps {
  children: JSX.Element
}

function Layout({ children }: LayoutProps): JSX.Element {
  return <div className={style.banner}>{children}</div>
}

export default Layout
