import React from 'react'
import Button from '../components/Button'
import styleEpisode from './Episode.module.scss'

function EpisodePage() {
  return (
    <div className={styleEpisode.content}>
      <h1>
        Rick and Morty <p>Episodes</p>
      </h1>
      <Button page="home" />
    </div>
  )
}

export default EpisodePage
