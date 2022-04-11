import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CharacterActionTypes,
  CharacterAction,
} from '../../types/characterTypes'
import { RootState } from '../reducers'
import { ThunkAction } from '../../components/lists/CharacterLists'

const fetchCharacters = (): ThunkAction<
  void,
  RootState,
  unknown,
  CharacterAction
> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS,
        payload: null,
      })
      const api = 'https://rickandmortyapi.com/api/character'
      const response = await axios.get(api)

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
