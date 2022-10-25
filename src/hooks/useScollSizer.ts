import useWindowDimensions from 'hooks/useWindowDimensions';
import { ListTypes } from 'types/generalTypes';
import scrollDivider, { maxWindowWidth } from 'variables/scroll';

const useScrollSizer = (page: string): number => {
  const { width, height } = useWindowDimensions();

  if (page === ListTypes.character) {
    if (width > maxWindowWidth.character) {
      return height / scrollDivider.charactersRow;
    }
    return height / scrollDivider.charactersColumn;
  }

  if (width > maxWindowWidth.episode) {
    return height / scrollDivider.episodesRow;
  }
  return height / scrollDivider.episodesColumn;
};

export default useScrollSizer;
