import React from 'react'
import Button from '../components/Button'
import styleLocation from './Location.module.scss'

function LocationPage() {
  return (
    <div className={styleLocation.content}>
      <h1>
        Rick and Morty <p>Locations</p>
      </h1>
      <Button page="home" />
    </div>
  )
}

export default LocationPage
