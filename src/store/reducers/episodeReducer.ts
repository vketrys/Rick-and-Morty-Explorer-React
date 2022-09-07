import {
  EpisodeAction,
  EpisodeActionTypes,
  EpisodeState,
} from 'types/episodeTypes';

const initialState: EpisodeState = {
  data: [],
  isLoading: false,
};

const episodeReducer = (
  state = initialState,
  { type, payload }: EpisodeAction
): EpisodeState => {
  switch (type) {
    case EpisodeActionTypes.FETCH_EPISODES:
      return { isLoading: true, data: [...state.data] };
    case EpisodeActionTypes.FETCH_EPISODES_SUCCESS:
      return { isLoading: false, data: [...state.data, ...payload] };
    case EpisodeActionTypes.FETCH_EPISODES_ERROR:
      return { isLoading: false, error: payload, data: [] };
    default:
      return state;
  }
};

export default episodeReducer;
