import { Dispatch } from 'redux';
import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { LocationAction } from 'types/locationTypes';
import {
  fetchLocationDispatch,
  fetchLocationErrorDispatch,
  fetchLocationSuccessDispatch,
} from './LocationDispatch';
import paths from '../../../components/navigation/paths';

const fetchLocations =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<LocationAction>) => {
    try {
      fetchLocationDispatch();
      const response = await axios(paths.location, {
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
