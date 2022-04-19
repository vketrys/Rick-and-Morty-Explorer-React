import { CharacterAction, CharacterActionTypes } from 'types/characterTypes'

const syncDispatch = (): CharacterAction => {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS,
    payload: null,
  }
}

export default syncDispatch
