import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CharacterActionTypes,
  CharacterAction,
} from '../../types/characterTypes'

const fetchCharacters = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS })
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character'
      )
      setTimeout(() => {
        dispatch({
          type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: 'Loading error',
      })
    }
  }
}
export default fetchCharacters
