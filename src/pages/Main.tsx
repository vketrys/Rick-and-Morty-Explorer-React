import React from 'react'
import Button from '../components/Button'
import styleMain from './Main.module.scss'

function MainPage(): JSX.Element {
  return (
    <div className={styleMain.content}>
      <h1>
        Rick and Morty <p>Explorer</p>
      </h1>
      <Button page="characters" label="characters" />
      <Button page="locations" label="locations" />
      <Button page="episodes" label="episodes" />
    </div>
  )
}

export default MainPage
