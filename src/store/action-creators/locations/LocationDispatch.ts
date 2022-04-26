import { LocationActionTypes, LocationAction } from 'types/locationTypes';
import { AxiosResponse } from 'axios';
import i18n from 'config/i18n';

export const fetchLocationDispatch = (): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS,
  payload: null,
});

export const fetchLocationSuccessDispatch = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: AxiosResponse<any, any>
): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS,
  payload: response.data.results,
});

export const fetchLocationErrorDispatch = (): LocationAction => ({
  type: LocationActionTypes.FETCH_LOCATIONS_ERROR,
  payload: i18n.t('loadingError'),
});
