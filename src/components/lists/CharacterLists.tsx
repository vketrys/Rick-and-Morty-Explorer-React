import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useTypeSelector from '../../hooks/useTypeSelector'
import fetchCharacters from '../../store/action-creators/character'
import styleCard from '../card/Card.module.scss'

const CharacterList: React.FC = () => {
  const { characters, error, loading } = useTypeSelector(
    (state) => state.character
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div className={styleCard.CardsContainer}>
      {characters.map((character) => (
        <div key={character.id}>
          <article className={styleCard.CardWrapper}>
            <div className={styleCard.CardImage}>
              <img src={character.image} alt={character.name} />
            </div>
            <div className={styleCard.CardContent}>
              <div className={styleCard.NameSection}>
                <a href={character.url}>
                  <h2>{character.name}</h2>
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}

export default CharacterList
