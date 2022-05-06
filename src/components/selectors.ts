import useTypeSelector from 'hooks/useTypeSelector';
import { CharacterState } from 'types/characterTypes';
import { EpisodeState } from 'types/episodeTypes';
import { GeneralState } from 'types/generalTypes';
import { LocationState } from 'types/locationTypes';

export const CharacterSelectors = (): CharacterState => {
  const { data, error, isLoading } = useTypeSelector(
    (state) => state.character
  );
  return { data, error, isLoading };
};

export const LocationSelectors = (): LocationState => {
  const { data, error, isLoading } = useTypeSelector((state) => state.location);
  return { data, error, isLoading };
};

export const EpisodeSelectors = (): EpisodeState => {
  const { data, error, isLoading } = useTypeSelector((state) => state.episode);
  return { data, error, isLoading };
};

export const GeneralSelectors = (type: string): GeneralState => {
  switch (type) {
    case 'character':
      return CharacterSelectors();
    case 'location':
      return LocationSelectors();
    case 'episode':
      return EpisodeSelectors();
    default:
      return CharacterSelectors();
  }
};
