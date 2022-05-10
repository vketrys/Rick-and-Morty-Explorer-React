import { CharacterState } from './characterTypes';
import { LocationState } from './locationTypes';

export type GeneralState = LocationState | CharacterState;

export enum ListTypes {
  character = 'character',
  location = 'location',
  // episode = 'episode',
}
