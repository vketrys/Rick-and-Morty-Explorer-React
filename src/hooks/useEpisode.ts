import { useEffect, useState } from 'react';
import axios from 'axios';

import paths from 'components/navigation/paths';
import { Episode } from 'types/episodeTypes';
import { examples } from 'types/generalTypes';

interface ServerResponse {
  data: Episode;
}

const useEpisode = (id: string): Episode => {
  const [episodes, setEpisodes] = useState<Episode>(examples.episode);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${paths.episode}/${id}`)
      .then((response: ServerResponse) => {
        const episodes: Episode = response.data;
        setEpisodes(episodes);
      });
  }, []);

  return episodes;
};

export default useEpisode;
