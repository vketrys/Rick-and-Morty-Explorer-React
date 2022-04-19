import { Dispatch } from 'redux'
import axios from 'axios'

import i18n from 'config/i18n'

import { AppThunk } from 'types/thunkTypes'
import { CharacterAction, CharacterActionTypes } from 'types/characterTypes'

const fetchCharacters = (page: number): AppThunk<void> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      const response = await axios({
        url: '/character',
        baseURL: `${process.env.REACT_APP_API_URL}`,
        params: {
          page,
        },
      })
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      })
    } catch (error) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: i18n.t('loadingError'),
      })
    }
  }
}

export default fetchCharacters
