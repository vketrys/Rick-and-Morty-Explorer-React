import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import episodeReducer from './episodeReducer';
import locationReducer from './locationReducer';
import starringCharacterReducer from './starringCharsReducer';
import starringEpisodeReducer from './starringEpisodesReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
  episode: episodeReducer,
  starringEpisodes: starringEpisodeReducer,
  starringCharacters: starringCharacterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
