export interface EpisodeState {
  data: EpisodeType[];
  isLoading: boolean;
  error?: string;
}

interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
  url: string;
}

export interface CardProps {
  episode: {
    id: number;
    name: string;
    air_date: string;
    characters: string[];
    episode: string;
    url: string;
  };
}

export type EpisodeType = EpisodeProps;

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
  payload: EpisodeType[];
}
interface FetchEpisodeErrorAction {
  type: EpisodeActionTypes.FETCH_EPISODES_ERROR;
  payload: string;
}

export type EpisodeAction =
  | FetchEpisodeAction
  | FetchEpisodeSuccessAction
  | FetchEpisodeErrorAction;
