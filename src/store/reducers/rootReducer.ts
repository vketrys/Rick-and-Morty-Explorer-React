import { combineReducers } from 'redux'
import characterReducer from './characterReducer'

const rootReducer = combineReducers({
  characters: characterReducer,
})
export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
