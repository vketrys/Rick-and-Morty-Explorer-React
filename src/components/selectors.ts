import useTypeSelector from 'hooks/useTypeSelector';
import { CharacterState } from 'types/characterTypes';
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

export const GeneralSelectors = (type: string): GeneralState => {
  if (type === 'location') {
    return LocationSelectors();
  }
  return CharacterSelectors();
};
