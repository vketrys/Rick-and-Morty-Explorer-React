import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTypeSelector from '../../hooks/useTypeSelector'
import fetchCharacters from '../../store/action-creators/character'

const CharacterList: React.FC = () => {
  const state = useSelector(
    (state) => state.character
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  })

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {characters.map(
        (character: { results: { name: string; id: number } }) => (
          <div key={character.results.id}>{character.results.name}</div>
        )
      )}
    </div>
  )
}

export default CharacterList
