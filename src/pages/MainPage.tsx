import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className="content">
      <h1>
        Rick and Morty <p>Explorer</p>
      </h1>
      <Link to="/characters">
        <button type="button">
          <span />
          Characters
        </button>
      </Link>
      <Link to="/locations">
        <button type="button">
          <span />
          Locations
        </button>
      </Link>
      <Link to="/episodes">
        <button type="button">
          <span />
          Episodes
        </button>
      </Link>
    </div>
  )
}

export default MainPage
