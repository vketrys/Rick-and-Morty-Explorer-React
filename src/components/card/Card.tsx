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
      url: string
    }
    image: string
    episode: string[]
    url: string
  }
}

export default React.memo(function Card({ character }: CardProps): JSX.Element {
  return (
    <article className={styleCard.CardWrapper}>
      <div className={styleCard.CardImage}>
        <div className={styleCard.Status}>{character.status}</div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styleCard.CardContent}>
        <div className={styleCard.NameSection}>
          <a href={character.url}>
            <h2>
              {character.name}, {character.id}
            </h2>
          </a>
          <h6>
            {character.species}, {character.gender}
          </h6>
        </div>
        <div className={styleCard.description}>
          <a href={character.episode[0]}>First seen at...</a>
          <br />
          <br />
          <a href={character.origin.url}>Origin: {character.origin.name}</a>
        </div>
      </div>
    </article>
  )
})
