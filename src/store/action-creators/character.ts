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
      let endpoints = []
      let api = ''
      endpoints = []
      for (let i = 1; i < 6; i += 1) {
        api = `https://rickandmortyapi.com/api/character/?page=${i}`
        endpoints.push(api)
      }
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      )

      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response[0].data.results,
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
