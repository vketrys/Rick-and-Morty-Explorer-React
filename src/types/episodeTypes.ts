export interface EpisodeState {
  data: EpisodeProps[];
  isLoading: boolean;
  error?: string;
}

export interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
  url: string;
}

export enum EpisodeActionTypes {
  FETCH_EPISODES = 'FETCH_EPISODES',
  FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS ',
  FETCH_EPISODES_ERROR = 'FETCH_EPISODES_ERROR',
}
interface FetchEpisodeAction {
  type: EpisodeActionTypes.FETCH_EPISODES;
  payload: boolean;
}
interface FetchEpisodeSuccessAction {
  type: EpisodeActionTypes.FETCH_EPISODES_SUCCESS;
  payload: EpisodeProps[];
}
interface FetchEpisodeErrorAction {
  type: EpisodeActionTypes.FETCH_EPISODES_ERROR;
  payload: string;
}

export type EpisodeAction =
  | FetchEpisodeAction
  | FetchEpisodeSuccessAction
  | FetchEpisodeErrorAction;
