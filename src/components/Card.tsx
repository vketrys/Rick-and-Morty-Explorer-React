import React from 'react'
import styleCard from './Card.module.scss'

function Card(): JSX.Element {
  return (
    <article className={styleCard.CardWrapper}>
      <div className={styleCard.CardImage}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          alt="Alien Rick"
        />
      </div>
      <div className={styleCard.CardContent}>
        <div className={styleCard.NameSection}>
          <a href="https://rickandmortyapi.com/api/character/15">
            <h2>Alien Rick</h2>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Card
