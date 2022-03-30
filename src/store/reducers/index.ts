import { combineReducers } from 'redux'
// import store from '..'
import characterReducer from './characterReducer'

const rootReducer = combineReducers({
  character: characterReducer,
})

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
