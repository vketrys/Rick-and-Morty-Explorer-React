import useTypeSelector from 'hooks/useTypeSelector';
import fetchLocations from 'store/action-creators/locations/moreLocations';
import fetchCharacters from 'store/action-creators/moreCharacters';
import { CharacterState } from 'types/characterTypes';
import { GeneralState, listTypes } from 'types/generalTypes';
import { LocationState } from 'types/locationTypes';
import { AppThunk } from 'types/thunkTypes';

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

export const fetchData = (page: number, type: string): AppThunk<void> => {
  if (type === listTypes.character) {
    return fetchCharacters(page);
  }
  return fetchLocations(page);
};
