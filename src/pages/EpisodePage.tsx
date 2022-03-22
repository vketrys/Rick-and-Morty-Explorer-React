import React from 'react'
import { Link } from 'react-router-dom'

function EpisodePage() {
  return (
    <div className="content">
      <h1>
        Rick and Morty <p>Episodes</p>
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

export default EpisodePage
