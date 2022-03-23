import React from 'react'
import Button from '../components/Button'
import './pages.scss'

function MainPage() {
  return (
    <div className="content">
      <h1>
        Rick and Morty <p>Explorer</p>
      </h1>
      {Button({ page: 'characters' })}
      {Button({ page: 'locations' })}
      {Button({ page: 'episodes' })}
    </div>
  )
}

export default MainPage
