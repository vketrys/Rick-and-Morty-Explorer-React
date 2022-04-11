export interface CharacterState {
  characters: Array<number | string>
  loading: boolean
  error?: string
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS ',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
}
interface FetchCharacterAction {
  type: CharacterActionTypes.FETCH_CHARACTERS
  payload: null
}
interface FetchCharacterSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS
  payload: Array<number | string>
}
interface FetchCharacterErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR
  payload: string
}

export type CharacterAction =
  | FetchCharacterAction
  | FetchCharacterSuccessAction
  | FetchCharacterErrorAction
