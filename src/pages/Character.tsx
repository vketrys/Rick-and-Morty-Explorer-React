import React from 'react'
import Button from '../components/Button'
import './pages.scss'

function CharacterPage() {
  return (
    <div className="content">
      <h1>
        Rick and Morty <p>Characters</p>
      </h1>
      {Button({ page: 'home' })}
    </div>
  )
}

export default CharacterPage
