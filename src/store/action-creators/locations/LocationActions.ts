import {
  LocationActionTypes,
  LocationAction,
  LocationProps,
} from 'types/locationTypes';

import i18n from 'config/i18n';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  results: LocationProps[];
}

export const fetchLocationAction = (): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS,
  payload: true,
});

export const fetchLocationSuccessAction = (
  response: ServerResponse
): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS,
  payload: response.data.results,
});

export const fetchLocationErrorAction = (): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS_ERROR,
  payload: i18n.t('loadingError'),
});
