export interface LocationState {
  data: LocationProps[];
  isLoading: boolean;
  error?: string;
}

export interface LocationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
  url: string;
  residents: string[];
}

export enum LocationActionTypes {
  FETCH_LOCATIONS = 'FETCH_LOCATIONS',
  FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS ',
  FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR',
}
interface FetchLocationAction {
  type: LocationActionTypes.FETCH_LOCATIONS;
  payload: boolean;
}
interface FetchLocationSuccessAction {
  type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS;
  payload: LocationProps[];
}
interface FetchLocationErrorAction {
  type: LocationActionTypes.FETCH_LOCATIONS_ERROR;
  payload: string;
}

export type LocationAction =
  | FetchLocationAction
  | FetchLocationSuccessAction
  | FetchLocationErrorAction;
