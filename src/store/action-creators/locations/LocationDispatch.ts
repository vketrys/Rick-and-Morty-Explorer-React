import {
  LocationActionTypes,
  LocationAction,
  LocationType,
} from 'types/locationTypes';
import i18n from 'config/i18n';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: LocationType[];
}

export const fetchLocationDispatch = (): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS,
  payload: true,
});

export const fetchLocationSuccessDispatch = (
  response: ServerResponse
): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS,
  payload: response.data.results,
});

export const fetchLocationErrorDispatch = (): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS_ERROR,
  payload: i18n.t('loadingError'),
});
