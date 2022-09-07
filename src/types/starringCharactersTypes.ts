import { Character } from './characterTypes';

export interface StarringCharacterState {
  characters: Character[];
  isLoading: boolean;
  error?: string;
}

export enum StarringCharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_STARRING_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_STARRING_CHARACTERS_SUCCESS ',
  FETCH_ONE_CHARACTER_SUCCESS = 'FETCH_ONE_STARRING_CHARACTER_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_STARRING_CHARACTERS_ERROR',
}
interface FetchStarringCharacterAction {
  type: StarringCharacterActionTypes.FETCH_CHARACTERS;
  payload: boolean;
}
interface FetchStarringCharacterSuccessAction {
  type: StarringCharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: Character[];
}
interface FetchOneStarringCharacterSuccessAction {
  type: StarringCharacterActionTypes.FETCH_ONE_CHARACTER_SUCCESS;
  payload: Character;
}
interface FetchStarringCharacterErrorAction {
  type: StarringCharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}

export type StarringCharacterAction =
  | FetchStarringCharacterAction
  | FetchStarringCharacterSuccessAction
  | FetchOneStarringCharacterSuccessAction
  | FetchStarringCharacterErrorAction;
