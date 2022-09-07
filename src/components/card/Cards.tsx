import React from 'react';

import { selectors } from 'components/selectors';

import { Location } from 'types/locationTypes';
import { Character } from 'types/characterTypes';
import { Episode } from 'types/episodeTypes';
import { ListTypes } from 'types/generalTypes';

import useTypeSelector from 'hooks/useTypeSelector';

import style from 'pages/contentList/List.module.scss';

import cards from './cardsSelector';

interface CardsProps {
  type: ListTypes;
}

const Cards = ({ type }: CardsProps): JSX.Element => {
  const { data } = useTypeSelector(selectors[type]);

  return (
    <div className={style.CardsContainer}>
      {data.map((item) => {
        switch (type) {
          case ListTypes.character:
            return <cards.character key={item.id} item={item as Character} />;
          case ListTypes.location:
            return <cards.location key={item.id} item={item as Location} />;
          case ListTypes.episode:
            return <cards.episode key={item.id} item={item as Episode} />;
          default:
            return <cards.character key={item.id} item={item as Character} />;
        }
      })}
    </div>
  );
};

export default Cards;
