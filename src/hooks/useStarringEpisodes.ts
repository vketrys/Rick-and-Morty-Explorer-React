import paths from 'components/navigation/paths';
import axios from 'config/axios';
import { useEffect, useState } from 'react';
import { Episode } from 'types/episodeTypes';

interface ServerResponseArray {
  data: Episode[];
}

interface ServerResponseObject {
  data: Episode;
}

const useStarringEpisodes = (ids: string[]): Episode[] => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  useEffect(() => {
    if (ids.length > 1) {
      axios
        .get(`${paths.episode}/${ids.join()}`)
        .then((response: ServerResponseArray) => {
          const episodes: Episode[] = response.data;
          setEpisodes(episodes);
        });
    } else {
      axios
        .get(`${paths.episode}/${ids.join()}`)
        .then((response: ServerResponseObject) => {
          const episodes: Episode[] = [];
          episodes.push(response.data);
          setEpisodes(episodes);
        });
    }
  }, []);

  return episodes;
};

export default useStarringEpisodes;
