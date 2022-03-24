import React from 'react'
import Button from '../components/Button'
import styleCharacter from './Character.module.scss'

function CharacterPage() {
  return (
    <div className={styleCharacter.content}>
      <h1>
        Rick and Morty <p>Characters</p>
      </h1>
      <Button page="home" />
    </div>
  )
}

export default CharacterPage
