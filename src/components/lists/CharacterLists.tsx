import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useTypeSelector from '../../hooks/useTypeSelector'
import fetchCharacters from '../../store/action-creators/character'

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
    <div>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  )
}

export default CharacterList
