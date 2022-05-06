import { GeneralSelectors } from 'components/selectors';
import React from 'react';
import { listTypes } from 'types/generalTypes';

import style from 'pages/contentList/List.module.scss';

import { CharacterProps } from 'types/characterTypes';
import { EpisodeProps } from 'types/episodeTypes';
import { LocationProps } from 'types/locationTypes';
import CharacterCard from './CharacterCard';
import EpisodeCard from './EpisodeCard';
import LocationCard from './LocationCard';

interface PageName {
  type: string;
}

const Cards = ({ type }: PageName): JSX.Element => {
  const { data } = GeneralSelectors(type);

  const cardRender = (type: string): JSX.Element => (
    <div className={style.CardsContainer}>
      {data.map((item) => {
        switch (type) {
          case listTypes.character:
            return (
              <CharacterCard key={item.id} character={item as CharacterProps} />
            );
          case listTypes.location:
            return (
              <LocationCard key={item.id} location={item as LocationProps} />
            );
          case listTypes.episode:
            return <EpisodeCard key={item.id} episode={item as EpisodeProps} />;
          default:
            return (
              <CharacterCard key={item.id} character={item as CharacterProps} />
            );
        }
      })}
    </div>
  );

  switch (type) {
    case listTypes.character:
      return cardRender(type);
    case listTypes.location:
      return cardRender(type);
    case listTypes.episode:
      return cardRender(type);
    default:
      return cardRender(listTypes.character);
  }
};

export default Cards;
