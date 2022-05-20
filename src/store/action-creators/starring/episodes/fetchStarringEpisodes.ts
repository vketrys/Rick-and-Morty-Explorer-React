import { Dispatch } from 'redux';
import axios from 'config/axios';

import { AppThunk } from 'types/thunkTypes';
import { StarringEpisodeAction } from 'types/starringEpisodesTypes';
import paths from 'components/navigation/paths';
import {
  fetchStarringEpisodeAction,
  fetchStarringEpisodeErrorAction,
  fetchStarringEpisodeSuccessAction,
} from './StarringEpisodesActions';

const fetchStarringEpisodes =
  (ids: string[]): AppThunk<void> =>
  async (dispatch: Dispatch<StarringEpisodeAction>) => {
    try {
      console.log('im here');
      fetchStarringEpisodeAction();
      const response = await axios.get(`${paths.episode}/${ids.join()}`);
      console.log(response);
      dispatch(fetchStarringEpisodeSuccessAction(response));
    } catch (error) {
      dispatch(fetchStarringEpisodeErrorAction());
    }
  };

export default fetchStarringEpisodes;
