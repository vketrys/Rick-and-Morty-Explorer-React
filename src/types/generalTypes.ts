import { CharacterState } from './characterTypes';
import { LocationState } from './locationTypes';
import { EpisodeState } from './episodeTypes';

export type GeneralState = LocationState | CharacterState | EpisodeState;

export enum ListTypes {
  character = 'character',
  location = 'location',
  episode = 'episode',
}
