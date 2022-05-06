import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import LocationCard from 'components/card/LocationCard';
import { GeneralSelectors, fetchData } from 'components/selectors';
import CharacterCard from 'components/card/CharacterCard';

import styleCharacter from 'components/card/CharacterCard.module.scss';
import styleLocation from 'components/card/LocationCard.module.scss';
import { LocationProps } from 'types/locationTypes';
import { CharacterProps } from 'types/characterTypes';
import { listTypes } from '../../types/generalTypes';
import style from './List.module.scss';

interface PageName {
  type: string;
}

function List({ type }: PageName): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = GeneralSelectors(type);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(page, type));
    setPage((page) => page + 1);
  }, []);

  const nextPage = (): void => {
    setPage((page) => page + 1);
    dispatch(fetchData(page, type));
  };

  if (isLoading) {
    return <h1>{t('loading')}</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const cardRender = (type: string): JSX.Element => (
    <div className={style.CardsContainer}>
      {data.map((item) => {
        if (type === listTypes.character) {
          return (
            <CharacterCard key={item.id} character={item as CharacterProps} />
          );
        }
        return <LocationCard key={item.id} location={item as LocationProps} />;
      })}
    </div>
  );

  const cardReturn = (): JSX.Element => {
    if (type === listTypes.character) {
      return cardRender(type);
    }
    return cardRender(type);
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={nextPage}
      hasMore
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
    >
      {cardReturn()}
    </InfiniteScroll>
  );
}

export default List;
