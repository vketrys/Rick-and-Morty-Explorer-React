import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from 'types/locationTypes'

const initialState: LocationState = {
  locations: [],
  isLoading: false,
}

const locationReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }: LocationAction
): LocationState => {
  switch (type) {
    case LocationActionTypes.FETCH_LOCATIONS:
      return { isLoading: true, locations: [] }
    case LocationActionTypes.FETCH_LOCATIONS_SUCCESS:
      return { isLoading: false, locations: [...state.locations, ...payload] }
    case LocationActionTypes.FETCH_LOCATIONS_ERROR:
      return { isLoading: false, error: payload, locations: [] }
    default:
      return state
  }
}

export default locationReducer
