import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
