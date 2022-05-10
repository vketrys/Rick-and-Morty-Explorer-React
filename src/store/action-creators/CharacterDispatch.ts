import { AxiosResponse } from 'axios';
import i18n from 'config/i18n';
import { CharacterAction, CharacterActionTypes } from 'types/characterTypes';

export const fetchCharacterDispatch = (): CharacterAction => {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS,
    payload: null,
  };
};

export const fetchCharacterSuccessDispatch = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: AxiosResponse<any, any>
): CharacterAction => {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
    payload: response.data.results,
  };
};

export const fetchCharacterErrorDispatch = (): CharacterAction => {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
    payload: i18n.t('loadingError'),
  };
};
