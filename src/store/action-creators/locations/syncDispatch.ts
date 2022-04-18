import { Dispatch } from 'redux'
import { LocationActionTypes, LocationAction } from 'types/locationTypes'
import { AppThunk } from 'types/thunkTypes'

const syncDispatch = (): AppThunk<void> => {
  return (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.FETCH_LOCATIONS,
      payload: null,
    })
  }
}

export default syncDispatch
