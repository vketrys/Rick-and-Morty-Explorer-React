import React from 'react'
import styleCard from './Card.module.scss'

interface CardProps {
  character: {
    id: number
    name: string
    status: string
    species: string
    gender: string
    origin: {
      name: string
      link: string
    }
    image: string
    url: string
  }
}

function Card({ character }: CardProps): JSX.Element {
  return (
    <article className={styleCard.CardWrapper}>
      <div className={styleCard.CardImage}>
        <div className={styleCard.Status}>{character.status}</div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styleCard.CardContent}>
        <div className={styleCard.NameSection}>
          <a href={character.url}>
            <h2>{character.name}</h2>
          </a>
          <h6>
            {character.species}-{character.gender}
          </h6>
        </div>
        <div className={styleCard.description}>
          <a href={character.origin.link}>Origin: {character.origin.name}</a>
        </div>
      </div>
    </article>
  )
}

export default Card
