import i18n from 'config/i18n';
import {
  CharacterAction,
  CharacterActionTypes,
  CharacterType,
} from 'types/characterTypes';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterType[];
}

export const fetchCharacterDispatch = (): CharacterAction => ({
  type: CharacterActionTypes.FETCH_CHARACTERS,
  payload: true,
});

export const fetchCharacterSuccessDispatch = (
  response: ServerResponse
): CharacterAction => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: response.data.results,
});

export const fetchCharacterErrorDispatch = (): CharacterAction => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
  payload: i18n.t('loadingError'),
});
