import React from 'react'
import Button from '../components/Button'
import './pages.scss'

function EpisodePage() {
  return (
    <div className="content">
      <h1>
        Rick and Morty <p>Episodes</p>
      </h1>
      {Button({ page: 'home' })}
    </div>
  )
}

export default EpisodePage
