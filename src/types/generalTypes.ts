import { CharacterState, CharacterType } from './characterTypes'
import { LocationState, LocationType } from './locationTypes'

export type GeneralState = LocationState | CharacterState

export type GeneralType = LocationType | CharacterType
