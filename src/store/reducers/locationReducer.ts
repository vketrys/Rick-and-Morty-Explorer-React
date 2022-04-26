import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from 'types/locationTypes'

const initialState: LocationState = {
  data: [],
  isLoading: false,
}

const locationReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }: LocationAction
): LocationState => {
  switch (type) {
    case LocationActionTypes.FETCH_LOCATIONS:
      return { isLoading: true, data: [] }
    case LocationActionTypes.FETCH_LOCATIONS_SUCCESS:
      return { isLoading: false, data: [...state.data, ...payload] }
    case LocationActionTypes.FETCH_LOCATIONS_ERROR:
      return { isLoading: false, error: payload, data: [] }
    default:
      return state
  }
}

export default locationReducer
