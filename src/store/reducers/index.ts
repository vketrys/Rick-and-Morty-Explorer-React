import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import episodeReducer from './episodeReducer';
import locationReducer from './locationReducer';
import starringEpisodeReducer from './starringEpisodesReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
  episode: episodeReducer,
  starringEpisodes: starringEpisodeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
