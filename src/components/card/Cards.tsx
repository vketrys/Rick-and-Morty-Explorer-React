import React from 'react';

import { selectors } from 'components/selectors';

import { ListTypes } from 'types/generalTypes';
import { Character } from 'types/characterTypes';
import { Location } from 'types/locationTypes';
import { Episode } from 'types/episodeTypes';

import useTypeSelector from 'hooks/useTypeSelector';

import style from 'pages/contentList/List.module.scss';

import CharacterCard from './character/CharacterCard';
import LocationCard from './location/LocationCard';
import EpisodeCard from './episode/EpisodeCard';

interface CardsProps {
  type: ListTypes;
}

const Cards = ({ type }: CardsProps): JSX.Element => {
  const { data } = useTypeSelector(selectors[type]);

  return (
    <div className={style.CardsContainer}>
      {data.map((item) => {
        const cards = {
          [ListTypes.character]: (
            <CharacterCard key={item.id} character={item as Character} />
          ),
          [ListTypes.location]: (
            <LocationCard key={item.id} location={item as Location} />
          ),
          [ListTypes.episode]: (
            <EpisodeCard key={item.id} episode={item as Episode} />
          ),
        };
        return cards[type];
      })}
    </div>
  );
};

export default Cards;
