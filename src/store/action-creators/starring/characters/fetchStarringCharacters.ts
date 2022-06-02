import { Dispatch } from 'redux';
import axios from 'axios';

import { AppThunk } from 'types/thunkTypes';
import { StarringCharacterAction } from 'types/starringCharactersTypes';
import { Character } from 'types/characterTypes';

import paths from 'components/navigation/paths';
import {
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

      const data: Character[] = [];

      if (ids.length > 1) {
        data.push(...response.data);
      } else {
        data.push(response.data);
      }
      dispatch(fetchStarringCharacterSuccessAction(data));
    } catch (error) {
      dispatch(fetchStarringCharacterErrorAction());
    }
  };

export default fetchStarringCharacters;
