export interface CharacterState {
  characters: string[]
  loading: boolean
  error: null | string
}
export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS ',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
}
interface FetchCharacterAction {
  type: CharacterActionTypes.FETCH_CHARACTERS
}
interface FetchCharacterSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS
  payload: string[]
}
interface FetchCharacterErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR
  payload: string
}

export type CharacterAction =
  | FetchCharacterAction
  | FetchCharacterSuccessAction
  | FetchCharacterErrorAction
