import { Dispatch } from 'redux';
import axios from 'axios';

import { Episode } from 'types/episodeTypes';
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
      fetchStarringEpisodeAction();
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${paths.episode}/${ids.join()}`
      );
      const data: Episode[] = [];

      if (ids.length > 1) {
        data.push(...response.data);
      } else {
        data.push(response.data);
      }
      dispatch(fetchStarringEpisodeSuccessAction(data));
    } catch (error) {
      dispatch(fetchStarringEpisodeErrorAction());
    }
  };

export default fetchStarringEpisodes;
