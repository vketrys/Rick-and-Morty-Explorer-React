import axios from 'axios'
import { Dispatch } from 'redux'
import { LocationActionTypes, LocationAction } from 'types/locationTypes'
import { AppThunk } from 'types/thunkTypes'

const fetchLocations = (): AppThunk<void> => {
  return async (dispatch: Dispatch<LocationAction>) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_LOCATION}`
      )
      dispatch({
        type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS,
        payload: response.data.results,
      })
    } catch (eror) {
      dispatch({
        type: LocationActionTypes.FETCH_LOCATIONS_ERROR,
        payload: 'Loading error',
      })
    }
  }
}

export default fetchLocations
