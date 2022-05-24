import React, { MemoExoticComponent } from 'react';

import { selectors } from 'components/selectors';

import { General, ListTypes } from 'types/generalTypes';
import { Character } from 'types/characterTypes';
import { Location } from 'types/locationTypes';
import { Episode } from 'types/episodeTypes';

import useTypeSelector from 'hooks/useTypeSelector';

import style from 'pages/contentList/List.module.scss';

import cards from './cardsSelector';
import { CharacterCardProps } from './character/CharacterCard';
import { LocationCardProps } from './location/LocationCard';
import { EpisodeCardProps } from './episode/EpisodeCard';

interface CardsProps {
  type: ListTypes;
}

const Cards = ({ type }: CardsProps): JSX.Element => {
  const { data } = useTypeSelector(selectors[type]);

  return (
    <div className={style.CardsContainer}>
      {data.map((item) => {
        const Component = cards[type];
        return <Component key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Cards;

// switch (type) {
//   case ListTypes.character:
//     return <cards[type] key={item.id} item={item as Character} />;
//   case ListTypes.location:
//     return <cards.location key={item.id} item={item as Location} />;
//   case ListTypes.episode:
//     return <cards.episode key={item.id} item={item as Episode} />;
//   default:
//     return <cards.character key={item.id} item={item as Character} />;
// }
