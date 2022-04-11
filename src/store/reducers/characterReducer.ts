import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from '../../types/characterTypes'

const initialState: CharacterState = {
  characters: [],
  loading: false,
}

const characterReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }: CharacterAction
): CharacterState => {
  switch (type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { loading: true, characters: [] }
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { loading: false, characters: payload }
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { loading: false, error: payload, characters: [] }
    default:
      return state
  }
}

export default characterReducer
