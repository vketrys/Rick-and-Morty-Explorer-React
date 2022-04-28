import {
  CharacterSelectors,
  EpisodeSelectors,
  LocationSelectors,
} from 'components/selectors';
import React from 'react';
import { listTypes } from 'types/generalTypes';

import styleCharacter from 'components/card/CharacterCard.module.scss';
import styleLocation from 'components/card/LocationCard.module.scss';
import styleEpisode from 'components/card/EpisodeCard.module.scss';
import CharacterCard from './CharacterCard';
import EpisodeCard from './EpisodeCard';
import LocationCard from './LocationCard';

interface PageName {
  type: string;
}

const Cards = ({ type }: PageName): JSX.Element => {
  if (type === listTypes.character) {
    const { data } = CharacterSelectors();
    return (
      <div className={styleCharacter.CardsContainer}>
        {data.map((item) => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </div>
    );
  }
  if (type === listTypes.location) {
    const { data } = LocationSelectors();
    return (
      <div className={styleLocation.CardsContainer}>
        {data.map((item) => (
          <LocationCard key={item.id} location={item} />
        ))}
      </div>
    );
  }
  const { data } = EpisodeSelectors();
  return (
    <div className={styleEpisode.CardsContainer}>
      {data.map((item) => (
        <EpisodeCard key={item.id} episode={item} />
      ))}
    </div>
  );
};

export default Cards;
