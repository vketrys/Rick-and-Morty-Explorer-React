import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from 'types/characterTypes'

const initialState: CharacterState = {
  characters: [],
  isLoading: false,
}

const characterReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }: CharacterAction
): CharacterState => {
  switch (type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { isLoading: true, characters: [] }
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { isLoading: false, characters: [...state.characters, ...payload] }
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { isLoading: false, error: payload, characters: [] }
    default:
      return state
  }
}

export default characterReducer
