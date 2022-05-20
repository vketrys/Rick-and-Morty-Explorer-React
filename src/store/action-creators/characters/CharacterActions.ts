import i18n from 'config/i18n';

import {
  CharacterAction,
  CharacterActionTypes,
  CharacterProps,
} from 'types/characterTypes';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  results: CharacterProps[];
}

export const fetchCharacterAction = (): CharacterAction => ({
  type: CharacterActionTypes.FETCH_CHARACTERS,
  payload: true,
});

export const fetchCharacterSuccessAction = (
  response: ServerResponse
): CharacterAction => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: response.data.results,
});

export const fetchCharacterErrorAction = (): CharacterAction => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
  payload: i18n.t('loadingError'),
});
