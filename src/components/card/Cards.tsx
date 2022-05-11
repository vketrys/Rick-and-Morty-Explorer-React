import React from 'react';

import { selectors } from 'components/selectors';

import { ListTypes } from 'types/generalTypes';
import { CharacterProps } from 'types/characterTypes';
import { LocationProps } from 'types/locationTypes';
import { EpisodeProps } from 'types/episodeTypes';

import useTypeSelector from 'hooks/useTypeSelector';

import style from 'pages/contentList/List.module.scss';

import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
import EpisodeCard from './EpisodeCard';

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
            <CharacterCard key={item.id} character={item as CharacterProps} />
          ),
          [ListTypes.location]: (
            <LocationCard key={item.id} location={item as LocationProps} />
          ),
          [ListTypes.episode]: (
            <EpisodeCard key={item.id} episode={item as EpisodeProps} />
          ),
        };
        return cards[type];
      })}
    </div>
  );
};

export default Cards;
