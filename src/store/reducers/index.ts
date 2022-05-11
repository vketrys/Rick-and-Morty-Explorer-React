import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import episodeReducer from './episodeReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
  episode: episodeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
