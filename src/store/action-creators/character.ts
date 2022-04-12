import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CharacterActionTypes,
  CharacterAction,
  AppThunk,
} from '../../types/characterTypes'

const fetchCharacters = (): AppThunk<void> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS,
        payload: null,
      })
      const response = await axios.get(
        `${process.env.REACT_APP_CHARS_FIRST_PAGE_URL}`
      )

      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      })
    } catch (eror) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: 'Loading error',
      })
    }
  }
}

export default fetchCharacters
