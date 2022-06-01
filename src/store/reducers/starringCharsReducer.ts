import {
  StarringCharacterAction,
  StarringCharacterActionTypes,
  StarringCharacterState,
} from 'types/starringCharactersTypes';

const initialState: StarringCharacterState = {
  characters: [],
  isLoading: false,
};

const starringCharacterReducer = (
  state = initialState,
  { type, payload }: StarringCharacterAction
): StarringCharacterState => {
  switch (type) {
    case StarringCharacterActionTypes.FETCH_CHARACTERS:
      return { isLoading: true, characters: [...state.characters] };
    case StarringCharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        isLoading: false,
        characters: [...payload],
      };
    case StarringCharacterActionTypes.FETCH_ONE_CHARACTER_SUCCESS:
      return {
        isLoading: false,
        characters: [payload],
      };
    case StarringCharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { isLoading: false, error: payload, characters: [] };
    default:
      return state;
  }
};

export default starringCharacterReducer;
