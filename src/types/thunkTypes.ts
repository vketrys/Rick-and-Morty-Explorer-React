import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'store/reducers'
import { CharacterAction } from './characterTypes'

type ThunkAction<R, S, E, A extends CharacterAction> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  CharacterAction
>
