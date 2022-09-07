import { Dispatch } from 'redux';
import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { EpisodeAction } from 'types/episodeTypes';
import paths from 'components/navigation/paths';
import {
  fetchEpisodeAction,
  fetchEpisodeErrorAction,
  fetchEpisodeSuccessAction,
} from './EpisodeActions';

const fetchEpisodes =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<EpisodeAction>) => {
    try {
      fetchEpisodeAction();
      const response = await axios(paths.episode, {
        params: {
          page,
        },
      });
      dispatch(fetchEpisodeSuccessAction(response));
    } catch (error) {
      dispatch(fetchEpisodeErrorAction());
    }
  };

export default fetchEpisodes;
