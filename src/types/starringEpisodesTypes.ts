import { EpisodeProps } from './episodeTypes';

export interface StarringEpisodeState {
  episodes: EpisodeProps[];
  isLoading: boolean;
  error?: string;
}

export enum StarringEpisodeActionTypes {
  FETCH_EPISODES = 'FETCH_EPISODES',
  FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS ',
  FETCH_EPISODES_ERROR = 'FETCH_EPISODES_ERROR',
}
interface FetchStarringEpisodeAction {
  type: StarringEpisodeActionTypes.FETCH_EPISODES;
  payload: boolean;
}
interface FetchStarringEpisodeSuccessAction {
  type: StarringEpisodeActionTypes.FETCH_EPISODES_SUCCESS;
  payload: EpisodeProps[];
}
interface FetchStarringEpisodeErrorAction {
  type: StarringEpisodeActionTypes.FETCH_EPISODES_ERROR;
  payload: string;
}

export type StarringEpisodeAction =
  | FetchStarringEpisodeAction
  | FetchStarringEpisodeSuccessAction
  | FetchStarringEpisodeErrorAction;
