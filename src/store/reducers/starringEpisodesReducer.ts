import {
  StarringEpisodeAction,
  StarringEpisodeActionTypes,
  StarringEpisodeState,
} from 'types/starringEpisodesTypes';

const initialState: StarringEpisodeState = {
  episodes: [],
  isLoading: false,
};

const starringEpisodeReducer = (
  state = initialState,
  { type, payload }: StarringEpisodeAction
): StarringEpisodeState => {
  switch (type) {
    case StarringEpisodeActionTypes.FETCH_EPISODES:
      return { isLoading: payload, episodes: [...state.episodes] };
    case StarringEpisodeActionTypes.FETCH_EPISODES_SUCCESS:
      return { isLoading: false, episodes: [...payload] };
    case StarringEpisodeActionTypes.FETCH_EPISODES_ERROR:
      return { isLoading: false, error: payload, episodes: [] };
    default:
      return state;
  }
};

export default starringEpisodeReducer;
