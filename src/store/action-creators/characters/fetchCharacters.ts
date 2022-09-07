import { Dispatch } from 'redux';

import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { CharacterAction } from 'types/characterTypes';

import routerPaths from 'components/navigation/paths';

import {
  fetchCharacterAction,
  fetchCharacterErrorAction,
  fetchCharacterSuccessAction,
} from './CharacterActions';

const fetchCharacters =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<CharacterAction>) => {
    try {
      fetchCharacterAction();
      const response = await axios(routerPaths.character, {
        params: {
          page,
        },
      });
      dispatch(fetchCharacterSuccessAction(response));
    } catch (error) {
      dispatch(fetchCharacterErrorAction());
    }
  };

export default fetchCharacters;
