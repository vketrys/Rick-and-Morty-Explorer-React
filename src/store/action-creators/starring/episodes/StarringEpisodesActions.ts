import {
  StarringEpisodeActionTypes,
  StarringEpisodeAction,
} from 'types/starringEpisodesTypes';
import { Episode } from 'types/episodeTypes';

import i18n from 'config/i18n';

export const fetchStarringEpisodeAction = (): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES,
  payload: true,
});

export const fetchStarringEpisodeSuccessAction = (
  response: Episode[]
): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES_SUCCESS,
  payload: response,
});

export const fetchStarringEpisodeErrorAction = (): StarringEpisodeAction => ({
  type: StarringEpisodeActionTypes.FETCH_EPISODES_ERROR,
  payload: i18n.t('loadingError'),
});
