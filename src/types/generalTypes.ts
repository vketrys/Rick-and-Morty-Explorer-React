import { CharacterState, CharacterType } from './characterTypes';
import { EpisodeType, EpisodeState } from './episodeTypes';
import { LocationState, LocationType } from './locationTypes';

export type GeneralState = LocationState | CharacterState | EpisodeState;

export type GeneralType = LocationType | CharacterType | EpisodeType;

export enum listTypes {
  character = 'character',
  location = 'location',
  episode = 'episode',
}
