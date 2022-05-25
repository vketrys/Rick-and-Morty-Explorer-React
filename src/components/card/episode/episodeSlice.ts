import { Episode } from 'types/episodeTypes';

const episodeSlice = (item: Episode): string => {
  const episodeNum = item.episode.slice(4);
  let slicedEpisode: string;

  if (+episodeNum[0]) {
    slicedEpisode = episodeNum;
  } else [, slicedEpisode] = episodeNum;

  return slicedEpisode;
};

export default episodeSlice;
