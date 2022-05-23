import { Episode } from 'types/episodeTypes';

const episodeSlice = (episode: Episode): string => {
  const episodeNum = episode.episode.slice(4);
  let slicedEpisode: string;

  if (+episodeNum[0]) {
    slicedEpisode = episodeNum;
  } else [, slicedEpisode] = episodeNum;

  return slicedEpisode;
};

export default episodeSlice;
