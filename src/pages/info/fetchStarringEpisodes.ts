import axios from 'config/axios';

import { EpisodeProps } from 'types/episodeTypes';
import paths from 'components/navigation/paths';

interface ServerResponseArray {
  data: EpisodeProps[];
}

interface ServerResponseObject {
  data: EpisodeProps;
}

let episodes: EpisodeProps[] = [];

const fetchStarringEpisodes = (pages: string): EpisodeProps[] => {
  if (pages.length > 1) {
    axios
      .get(`${paths.episode}/${pages}`)
      .then((response: ServerResponseArray) => {
        episodes = response.data;
      });
  } else {
    axios
      .get(`${paths.episode}/${pages}`)
      .then((response: ServerResponseObject) => {
        episodes.push(response.data);
      });
  }

  return episodes;
};

export default fetchStarringEpisodes;
