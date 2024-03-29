export interface CharacterState {
  data: Character[];
  isLoading: boolean;
  error?: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS ',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
}
interface FetchCharacterAction {
  type: CharacterActionTypes.FETCH_CHARACTERS;
  payload: boolean;
}
interface FetchCharacterSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: Character[];
}
interface FetchCharacterErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}

export type CharacterAction =
  | FetchCharacterAction
  | FetchCharacterSuccessAction
  | FetchCharacterErrorAction;
