import { Dispatch } from 'redux'
import axios from 'config/axios'

import { AppThunk } from 'types/thunkTypes'
import { LocationAction } from 'types/locationTypes'
import {
  fetchLocationDispatch,
  fetchLocationErrorDispatch,
  fetchLocationSuccessDispatch,
} from './LocationDispatch'

const fetchLocations = (page: number): AppThunk<void> => {
  return async (dispatch: Dispatch<LocationAction>) => {
    try {
      fetchLocationDispatch()
      const response = await axios('/location', {
        params: {
          page,
        },
      })
      dispatch(fetchLocationSuccessDispatch(response))
    } catch (error) {
      dispatch(fetchLocationErrorDispatch())
    }
  }
}

export default fetchLocations
