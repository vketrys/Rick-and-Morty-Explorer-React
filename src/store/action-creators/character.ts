import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CharacterActionTypes,
  CharacterAction,
} from '../../types/characterTypes'

const fetchCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>): Promise<any> => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS })
      const api = 'https://rickandmortyapi.com/api/character'
      const response = await axios.get(api)

      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      })
    } catch (e) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: 'Loading error',
      })
    }
  }
}

export default fetchCharacters
