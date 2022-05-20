import {
  StarringEpisodeActionTypes,
  StarringEpisodeAction,
} from 'types/starringEpisodesTypes';
import { EpisodeProps } from 'types/episodeTypes';

import i18n from 'config/i18n';

interface ServerResponse {
  data: EpisodeProps[];
}

export const fetchStarringEpisodeAction = (): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES,
  payload: true,
});

export const fetchStarringEpisodeSuccessAction = (
  response: ServerResponse
): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES_SUCCESS,
  payload: [...response.data],
});

export const fetchStarringEpisodeErrorAction = (): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES_ERROR,
  payload: i18n.t('loadingError'),
});
