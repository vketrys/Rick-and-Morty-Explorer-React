import { CombinedState } from 'redux';

import { CharacterState } from 'types/characterTypes';
import { EpisodeState } from 'types/episodeTypes';
import { GeneralState, ListTypes } from 'types/generalTypes';
import { LocationState } from 'types/locationTypes';
import { StarringEpisodeState } from 'types/starringEpisodesTypes';

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

export const StarringEpisodesSelectors = (
  state: CombinedState<{
    starringEpisodes: StarringEpisodeState;
  }>
): StarringEpisodeState => state.starringEpisodes;

export const selectors = {
  [ListTypes.character]: CharacterSelectors,
  [ListTypes.location]: LocationSelectors,
  [ListTypes.episode]: EpisodeSelectors,
};

export const URL_ID_POSITION = {
  character: 42,
  location: 41,
  episode: 40,
};

export const useItem = {
  [ListTypes.character]: useCharacter,
  [ListTypes.location]: useLocation,
  [ListTypes.episode]: useEpisode,
};
