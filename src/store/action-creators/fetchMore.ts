import axios from 'axios'
import { Dispatch } from 'redux'
import useTypeSelector from '../../hooks/useTypeSelector'
import {
  CharacterActionTypes,
  CharacterAction,
} from '../../types/characterTypes'
import { RootState } from '../reducers'

export type ThunkAction<R, S, E, A extends CharacterAction> = (
  dispatch: Dispatch<CharacterAction>,
  getState: () => S,
  extraArgument: E
) => R
let page = 1
const fetchMore = (): ThunkAction<
  void,
  RootState,
  unknown,
  CharacterAction
> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS })
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      page += 1

      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results.concat(response.data.results),
      })
    } catch (e) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: 'Loading error',
      })
    }
  }
}
export default fetchMore
