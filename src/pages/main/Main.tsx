import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/button/Button'
import style from './Main.module.scss'

function MainPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className={style.content}>
      <h1>
        Rick and Morty <p>Explorer</p>
      </h1>
      <div className={style.buttons}>
        <Button
          label="characters"
          onClick={(): void => navigate('/characters')}
        />
        <Button
          label="locations"
          onClick={(): void => navigate('/locations')}
        />
        <Button label="episodes" onClick={(): void => navigate('/episodes')} />
      </div>
    </div>
  )
}

export default MainPage
