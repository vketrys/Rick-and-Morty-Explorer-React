import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useTypeSelector from '../../hooks/useTypeSelector'
import fetchCharacters from '../../store/action-creators/character'

function CharacterList(): JSX.Element {
  const { characters, error, loading } = useTypeSelector(
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
