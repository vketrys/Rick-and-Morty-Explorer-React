import { EpisodeProps } from 'types/episodeTypes';

const episodeSlice = (episode: EpisodeProps): string => {
  const episodeNum = episode.episode.slice(4);
  let slicedEpisode: string;

  if (+episodeNum[0]) {
    slicedEpisode = episodeNum;
  } else [, slicedEpisode] = episodeNum;

  return slicedEpisode;
};

export default episodeSlice;
