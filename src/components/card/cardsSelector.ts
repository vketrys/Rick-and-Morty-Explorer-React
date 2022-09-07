import { ListTypes } from 'types/generalTypes';
import CharacterCard from './character/CharacterCard';
import EpisodeCard from './episode/EpisodeCard';
import LocationCard from './location/LocationCard';

const cards = {
  [ListTypes.character]: CharacterCard,
  [ListTypes.location]: LocationCard,
  [ListTypes.episode]: EpisodeCard,
};

export default cards;
