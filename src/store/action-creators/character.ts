import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CharacterActionTypes,
  CharacterAction,
} from '../../types/characterTypes'

const fetchCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>): Promise<1> => {
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
