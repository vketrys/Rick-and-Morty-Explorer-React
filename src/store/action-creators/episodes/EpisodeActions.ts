import {
  EpisodeActionTypes,
  EpisodeAction,
  EpisodeProps,
} from 'types/episodeTypes';
import i18n from 'config/i18n';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  results: EpisodeProps[];
}

export const fetchEpisodeAction = (): EpisodeAction => ({
  type: EpisodeActionTypes.FETCH_EPISODES,
  payload: true,
});

export const fetchEpisodeSuccessAction = (
  response: ServerResponse
): EpisodeAction => ({
  type: EpisodeActionTypes.FETCH_EPISODES_SUCCESS,
  payload: response.data.results,
});

export const fetchEpisodeErrorAction = (): EpisodeAction => ({
  type: EpisodeActionTypes.FETCH_EPISODES_ERROR,
  payload: i18n.t('loadingError'),
});
