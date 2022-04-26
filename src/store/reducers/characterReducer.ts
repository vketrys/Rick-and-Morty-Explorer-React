import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from 'types/characterTypes'

const initialState: CharacterState = {
  data: [],
  isLoading: false,
}

const characterReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }: CharacterAction
): CharacterState => {
  switch (type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { isLoading: true, data: [] }
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { isLoading: false, data: [...state.data, ...payload] }
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { isLoading: false, error: payload, data: [] }
    default:
      return state
  }
}

export default characterReducer
