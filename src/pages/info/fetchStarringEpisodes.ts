import axios from 'config/axios';

import { EpisodeProps } from 'types/episodeTypes';
import paths from 'components/navigation/paths';

const fetchStarringEpisodes = (pages: string): EpisodeProps[] => {
  let episodes: EpisodeProps[] = [];
  axios
    .get(paths.episode, {
      params: {
        pages,
      },
    })
    .then((response) => {
      episodes = response.data;
    });
  return episodes;
};

export default fetchStarringEpisodes;
