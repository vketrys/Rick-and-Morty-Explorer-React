import React from 'react'

import Button from '../components/Button'
import Card from '../components/Card'

import styleCharacter from './Character.module.scss'

function CharacterPage(): JSX.Element {
  return (
    <div className={styleCharacter.content}>
      <h1>
        Rick and Morty <p>Characters</p>
      </h1>
      <div className={styleCharacter.CardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button page="home" label="home" />
    </div>
  )
}

export default CharacterPage
