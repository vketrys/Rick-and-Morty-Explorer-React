import React from 'react';

import { selectors } from 'components/selectors';

import { ListTypes } from 'types/generalTypes';
import { CharacterProps } from 'types/characterTypes';
import { LocationProps } from 'types/locationTypes';

import useTypeSelector from 'hooks/useTypeSelector';

import style from 'pages/contentList/List.module.scss';

import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';

interface CardsProps {
  type: ListTypes;
}

const Cards = ({ type }: CardsProps): JSX.Element => {
  const { data } = useTypeSelector(selectors[type]);

  const cardRender = (type: ListTypes): JSX.Element => (
    <div className={style.CardsContainer}>
      {data.map((item) => {
        const cards = {
          [ListTypes.character]: (
            <CharacterCard key={item.id} character={item as CharacterProps} />
          ),
          [ListTypes.location]: (
            <LocationCard key={item.id} location={item as LocationProps} />
          ),
        };
        return cards[type];
      })}
    </div>
  );

  const cardsFunction = {
    [ListTypes.character]: cardRender(type),
    [ListTypes.location]: cardRender(type),
  };
  return cardsFunction[type];
};

export default Cards;
