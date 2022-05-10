import { Dispatch } from 'redux';
import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { CharacterAction } from 'types/characterTypes';
import {
  fetchCharacterDispatch,
  fetchCharacterErrorDispatch,
  fetchCharacterSuccessDispatch,
} from './CharacterDispatch';

const fetchCharacters = (page: number): AppThunk<void> => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      fetchCharacterDispatch();
      const response = await axios('/character', {
        params: {
          page,
        },
      });
      dispatch(fetchCharacterSuccessDispatch(response));
    } catch (error) {
      dispatch(fetchCharacterErrorDispatch());
    }
  };
};

export default fetchCharacters;
