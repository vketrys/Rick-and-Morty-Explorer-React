import useTypeSelector from 'hooks/useTypeSelector'
import { CharacterState } from 'types/characterTypes'

const CharacterSelectors = (): CharacterState => {
  const characters = useTypeSelector((state) => state.character.characters)
  const error = useTypeSelector((state) => state.character.error)
  const isLoading = useTypeSelector((state) => state.character.isLoading)
  return { characters, error, isLoading }
}

export default CharacterSelectors
