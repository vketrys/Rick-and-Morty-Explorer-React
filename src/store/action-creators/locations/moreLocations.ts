import { Dispatch } from 'redux';

import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { LocationAction } from 'types/locationTypes';

import routerPaths from 'components/navigation/paths';

import {
  fetchLocationDispatch,
  fetchLocationErrorDispatch,
  fetchLocationSuccessDispatch,
} from './LocationDispatch';

const fetchLocations =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<LocationAction>) => {
    try {
      fetchLocationDispatch();
      const response = await axios(routerPaths.location, {
        params: {
          page,
        },
      });
      dispatch(fetchLocationSuccessDispatch(response));
    } catch (error) {
      dispatch(fetchLocationErrorDispatch());
    }
  };

export default fetchLocations;
