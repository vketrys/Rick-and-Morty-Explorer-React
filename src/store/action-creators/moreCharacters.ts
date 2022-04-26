import { Dispatch } from 'redux';
import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { CharacterAction } from 'types/characterTypes';
import {
  fetchCharacterDispatch,
  fetchCharacterErrorDispatch,
  fetchCharacterSuccessDispatch,
} from './CharacterDispatch';
import paths from '../../components/navigation/paths';

const fetchCharacters =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<CharacterAction>) => {
    try {
      fetchCharacterDispatch();
      const response = await axios(paths.character, {
        params: {
          page,
        },
      });
      dispatch(fetchCharacterSuccessDispatch(response));
    } catch (error) {
      dispatch(fetchCharacterErrorDispatch());
    }
  };

export default fetchCharacters;
