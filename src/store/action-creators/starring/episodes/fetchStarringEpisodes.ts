import { Dispatch } from 'redux';
import axios from 'axios';

import { AppThunk } from 'types/thunkTypes';
import { StarringEpisodeAction } from 'types/starringEpisodesTypes';
import paths from 'components/navigation/paths';
import {
  fetchOneStarringEpisodeSuccessAction,
  fetchStarringEpisodeAction,
  fetchStarringEpisodeErrorAction,
  fetchStarringEpisodeSuccessAction,
} from './StarringEpisodesActions';

const fetchStarringEpisodes =
  (ids: string[]): AppThunk<void> =>
  async (dispatch: Dispatch<StarringEpisodeAction>) => {
    try {
      fetchStarringEpisodeAction();
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${paths.episode}/${ids.join()}`
      );

      if (ids.length > 1) {
        dispatch(fetchStarringEpisodeSuccessAction(response));
      } else {
        dispatch(fetchOneStarringEpisodeSuccessAction(response));
      }
    } catch (error) {
      dispatch(fetchStarringEpisodeErrorAction());
    }
  };

export default fetchStarringEpisodes;
