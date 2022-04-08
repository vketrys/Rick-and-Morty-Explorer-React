import React from 'react'
import style from './Loader.module.scss'

export default function Loader(): JSX.Element {
  return (
    <div className={style.LoaderContainer}>
      <div className={style.LoaderText}>
        <span className={style.LoaderWord1}>Wubba</span>
        <span className={style.LoaderWord2}>Lubba</span>
        <span className={style.LoaderWord3}>Dub</span>
        <span className={style.LoaderWord4}>Dub</span>
        <span className={style.LoaderWord5}>!</span>
      </div>
    </div>
  )
}
