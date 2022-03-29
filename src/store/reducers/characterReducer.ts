import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from '../../types/characterTypes'

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
}

const characterReducer = (
  action: CharacterAction,
  state = initialState
): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { loading: true, error: null, characters: [] }
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { loading: false, error: null, characters: action.payload }
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { loading: false, error: action.payload, characters: [] }
    default:
      return state
  }
}

export default characterReducer
