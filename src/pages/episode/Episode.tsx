import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/button/Button'
import Loader from '../../components/loader/Loader'
import style from './Episode.module.scss'

function EpisodePage(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className={style.content}>
      <h1>
        Rick and Morty <p>Episodes</p>
      </h1>
      <Loader />
      <Button label="home" onClick={(): void => navigate('/home')} />
    </div>
  )
}

export default EpisodePage
