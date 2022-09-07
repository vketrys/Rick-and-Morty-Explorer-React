import {
  StarringEpisodeActionTypes,
  StarringEpisodeAction,
} from 'types/starringEpisodesTypes';
import { Episode } from 'types/episodeTypes';

import i18n from 'config/i18n';

interface ServerResponse {
  data: Episode[];
}

interface ServerResponseObject {
  data: Episode;
}

export const fetchStarringEpisodeAction = (): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES,
  payload: true,
});

export const fetchStarringEpisodeSuccessAction = (
  response: ServerResponse
): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES_SUCCESS,
  payload: response.data,
});

export const fetchOneStarringEpisodeSuccessAction = (
  response: ServerResponseObject
): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_ONE_EPISODE_SUCCESS,
  payload: response.data,
});

export const fetchStarringEpisodeErrorAction = (): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES_ERROR,
  payload: i18n.t('loadingError'),
});
