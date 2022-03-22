import React from 'react'
import { Link } from 'react-router-dom'

function CharacterPage() {
  return (
    <div className="content">
      <h1>
        Rick and Morty <p>Characters</p>
      </h1>
      <Link to="/">
        <button type="button">
          <span />
          Home
        </button>
      </Link>
    </div>
  )
}

export default CharacterPage
