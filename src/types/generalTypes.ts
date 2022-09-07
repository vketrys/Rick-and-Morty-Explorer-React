import { Character, CharacterState } from './characterTypes';
import { Location, LocationState } from './locationTypes';
import { Episode, EpisodeState } from './episodeTypes';

export type GeneralState = LocationState | CharacterState | EpisodeState;

export type General = Character | Location | Episode;

export enum ListTypes {
  character = 'character',
  location = 'location',
  episode = 'episode',
}
