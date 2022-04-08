import { combineReducers } from 'redux'
import characterReducer from './characterReducer'

const rootReducer = combineReducers({
  character: characterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
