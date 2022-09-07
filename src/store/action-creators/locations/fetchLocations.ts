import { Dispatch } from 'redux';

import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { LocationAction } from 'types/locationTypes';

import routerPaths from 'components/navigation/paths';

import {
  fetchLocationAction,
  fetchLocationErrorAction,
  fetchLocationSuccessAction,
} from './LocationActions';

const fetchLocations =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<LocationAction>) => {
    try {
      fetchLocationAction();
      const response = await axios(routerPaths.location, {
        params: {
          page,
        },
      });
      dispatch(fetchLocationSuccessAction(response));
    } catch (error) {
      dispatch(fetchLocationErrorAction());
    }
  };

export default fetchLocations;
