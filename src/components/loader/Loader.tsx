import React from 'react'
import style from './Loader.module.scss'

export default function Loader(): JSX.Element {
  return (
    <div className={style.LoaderContainer}>
      <div className={style.LoaderText}>
        <span className={style.LoaderWords}>Wubba Lubba Dub Dub !</span>
      </div>
    </div>
  )
}
