import React from 'react'
import style from './Loader.module.scss'

export default function Loader(): JSX.Element {
  return (
    <div className={style.LoaderContainer}>
      <div className={style.LoaderImage} />
      <div className={style.LoaderText}>
        <p>Wubba Lubba Dub Dub!</p>
      </div>
    </div>
  )
}
