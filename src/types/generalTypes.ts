import { CharacterState, CharacterType } from './characterTypes';
import { LocationState, LocationType } from './locationTypes';

export type GeneralState = LocationState | CharacterState;

export type GeneralType = LocationType | CharacterType;

export enum listTypes {
  character = 'character',
  location = 'location',
  episode = 'episode',
}
