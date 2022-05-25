import { Dispatch } from 'redux';
import axios from 'axios';

import { AppThunk } from 'types/thunkTypes';
import { StarringCharacterAction } from 'types/starringCharactersTypes';

import paths from 'components/navigation/paths';
import {
  fetchOneStarringCharacterSuccessAction,
  fetchStarringCharacterAction,
  fetchStarringCharacterErrorAction,
  fetchStarringCharacterSuccessAction,
} from './StarringCharactersActions';

const fetchStarringCharacters =
  (ids: string[]): AppThunk<void> =>
  async (dispatch: Dispatch<StarringCharacterAction>) => {
    try {
      fetchStarringCharacterAction();
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${paths.character}/${ids.join()}`
      );
      if (ids.length > 1) {
        dispatch(fetchStarringCharacterSuccessAction(response));
      } else {
        dispatch(fetchOneStarringCharacterSuccessAction(response));
      }
    } catch (error) {
      dispatch(fetchStarringCharacterErrorAction());
    }
  };

export default fetchStarringCharacters;
