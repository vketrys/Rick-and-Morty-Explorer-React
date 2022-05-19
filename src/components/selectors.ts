import { CombinedState } from 'redux';

import { CharacterState } from 'types/characterTypes';
import { EpisodeState } from 'types/episodeTypes';
import { GeneralState, ListTypes } from 'types/generalTypes';
import { LocationState } from 'types/locationTypes';

export const CharacterSelectors = (
  state: CombinedState<{
    character: CharacterState;
  }>
): GeneralState => state.character;

export const LocationSelectors = (
  state: CombinedState<{
    location: LocationState;
  }>
): GeneralState => state.location;

export const EpisodeSelectors = (
  state: CombinedState<{
    episode: EpisodeState;
  }>
): GeneralState => state.episode;

export const selectors = {
  [ListTypes.character]: CharacterSelectors,
  [ListTypes.location]: LocationSelectors,
  [ListTypes.episode]: EpisodeSelectors,
};
