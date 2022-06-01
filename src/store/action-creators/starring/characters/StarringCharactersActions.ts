import {
  StarringCharacterActionTypes,
  StarringCharacterAction,
} from 'types/starringCharactersTypes';
import { Character } from 'types/characterTypes';

import i18n from 'config/i18n';

interface ServerResponse {
  data: Character[];
}

interface ServerResponseObject {
  data: Character;
}

export const fetchStarringCharacterAction = (): StarringCharacterAction => ({
  type: StarringCharacterActionTypes.FETCH_CHARACTERS,
  payload: true,
});

export const fetchStarringCharacterSuccessAction = (
  response: Character[]
): StarringCharacterAction => ({
  type: StarringCharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: response,
});

export const fetchOneStarringCharacterSuccessAction = (
  response: ServerResponseObject
): StarringCharacterAction => ({
  type: StarringCharacterActionTypes.FETCH_ONE_CHARACTER_SUCCESS,
  payload: response.data,
});

export const fetchStarringCharacterErrorAction =
  (): StarringCharacterAction => ({
    type: StarringCharacterActionTypes.FETCH_CHARACTERS_ERROR,
    payload: i18n.t('loadingError'),
  });
