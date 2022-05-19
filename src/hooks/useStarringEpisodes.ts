import paths from 'components/navigation/paths';
import axios from 'config/axios';
import { useEffect, useState } from 'react';
import { EpisodeProps } from 'types/episodeTypes';

interface ServerResponseArray {
  data: EpisodeProps[];
}

interface ServerResponseObject {
  data: EpisodeProps;
}

const useStarringEpisodes = (ids: string[]): EpisodeProps[] => {
  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);
  useEffect(() => {
    if (ids.length > 1) {
      axios
        .get(`${paths.episode}/${ids.join()}`)
        .then((response: ServerResponseArray) => {
          const episodes: EpisodeProps[] = response.data;
          setEpisodes(episodes);
        });
    } else {
      axios
        .get(`${paths.episode}/${ids.join()}`)
        .then((response: ServerResponseObject) => {
          const episodes: EpisodeProps[] = [];
          episodes.push(response.data);
          setEpisodes(episodes);
        });
    }
  }, []);

  return episodes;
};

export default useStarringEpisodes;
