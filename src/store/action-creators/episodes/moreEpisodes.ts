import { Dispatch } from 'redux';
import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { EpisodeAction } from 'types/episodeTypes';
import paths from 'components/navigation/paths';
import {
  fetchEpisodeDispatch,
  fetchEpisodeErrorDispatch,
  fetchEpisodeSuccessDispatch,
} from './EpisodeDispatch';

const fetchEpisodes =
  (page: number): AppThunk<void> =>
  async (dispatch: Dispatch<EpisodeAction>) => {
    try {
      fetchEpisodeDispatch();
      const response = await axios(paths.episode, {
        params: {
          page,
        },
      });
      dispatch(fetchEpisodeSuccessDispatch(response));
    } catch (error) {
      dispatch(fetchEpisodeErrorDispatch());
    }
  };

export default fetchEpisodes;
