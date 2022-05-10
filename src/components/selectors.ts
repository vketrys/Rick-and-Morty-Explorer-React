import { CombinedState } from 'redux';

import { CharacterState } from 'types/characterTypes';
import { GeneralState, ListTypes } from 'types/generalTypes';
import { LocationState } from 'types/locationTypes';

export const CharacterSelectors = (
  state: CombinedState<{
    character: CharacterState;
    location: LocationState;
  }>
): GeneralState => state.character;

export const LocationSelectors = (
  state: CombinedState<{
    character: CharacterState;
    location: LocationState;
  }>
): GeneralState => state.location;

export const selectors = {
  [ListTypes.character]: CharacterSelectors,
  [ListTypes.location]: LocationSelectors,
};
