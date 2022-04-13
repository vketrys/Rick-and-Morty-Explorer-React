import { Dispatch } from 'redux'
import axios from 'axios'

import i18n from '../../config/i18n'

import { AppThunk } from '../../types/thunkTypes'
import {
  CharacterAction,
  CharacterActionTypes,
} from '../../types/characterTypes'

let page = 2

const fetchMoreCharacters = (): AppThunk<void> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_CHARACTER}`,
        {
          params: {
            page,
          },
        }
      )
      page += 1
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

export default fetchMoreCharacters
