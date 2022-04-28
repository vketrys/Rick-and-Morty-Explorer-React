import {
  EpisodeActionTypes,
  EpisodeAction,
  EpisodeType,
} from 'types/episodeTypes';
import i18n from 'config/i18n';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: EpisodeType[];
}

export const fetchEpisodeDispatch = (): EpisodeAction => ({
  type: EpisodeActionTypes.FETCH_EPISODES,
  payload: true,
});

export const fetchEpisodeSuccessDispatch = (
  response: ServerResponse
): EpisodeAction => ({
  type: EpisodeActionTypes.FETCH_EPISODES_SUCCESS,
  payload: response.data.results,
});

export const fetchEpisodeErrorDispatch = (): EpisodeAction => ({
  type: EpisodeActionTypes.FETCH_EPISODES_ERROR,
  payload: i18n.t('loadingError'),
});
