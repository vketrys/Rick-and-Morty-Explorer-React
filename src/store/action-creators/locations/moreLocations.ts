import { Dispatch } from 'redux'
import axios from 'axios'

import i18n from 'config/i18n'

import { AppThunk } from 'types/thunkTypes'
import { LocationAction, LocationActionTypes } from 'types/locationTypes'

const fetchMoreLocations = (page: number): AppThunk<void> => {
  return async (dispatch: Dispatch<LocationAction>) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_LOCATION}`,
        {
          params: {
            page,
          },
        }
      )
      dispatch({
        type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS,
        payload: response.data.results,
      })
    } catch (error) {
      dispatch({
        type: LocationActionTypes.FETCH_LOCATIONS_ERROR,
        payload: i18n.t('loadingError'),
      })
    }
  }
}

export default fetchMoreLocations
