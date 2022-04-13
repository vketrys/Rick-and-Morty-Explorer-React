import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CharacterActionTypes,
  CharacterAction,
} from '../../types/characterTypes'
import { AppThunk } from '../../types/thunkTypes'

const fetchCharacters = (): AppThunk<void> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS,
        payload: null,
      })
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_CHARACTER}`
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
