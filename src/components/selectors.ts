import { CombinedState } from 'redux';

import { CharacterState } from 'types/characterTypes';
import { EpisodeState } from 'types/episodeTypes';
import { GeneralState, ListTypes } from 'types/generalTypes';
import { LocationState } from 'types/locationTypes';

export const CharacterSelectors = (
  state: CombinedState<{
    character: CharacterState;
    location: LocationState;
    episode: EpisodeState;
  }>
): GeneralState => state.character;

export const LocationSelectors = (
  state: CombinedState<{
    character: CharacterState;
    location: LocationState;
    episode: EpisodeState;
  }>
): GeneralState => state.location;

export const EpisodeSelectors = (
  state: CombinedState<{
    character: CharacterState;
    location: LocationState;
    episode: EpisodeState;
  }>
): GeneralState => state.episode;

export const selectors = {
  [ListTypes.character]: CharacterSelectors,
  [ListTypes.location]: LocationSelectors,
  [ListTypes.episode]: EpisodeSelectors,
};
