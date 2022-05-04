import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import LocationCard from 'components/card/LocationCard';
import {
  CharacterSelectors,
  GeneralSelectors,
  LocationSelectors,
  fetchData,
} from 'components/selectors';
import CharacterCard from 'components/card/CharacterCard';

import styleCharacter from 'components/card/CharacterCard.module.scss';
import styleLocation from 'components/card/LocationCard.module.scss';
import { listTypes } from '../../types/generalTypes';

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

  const cardReturn = (): JSX.Element => {
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
    const { data } = LocationSelectors();
    return (
      <div className={styleLocation.CardsContainer}>
        {data.map((item) => (
          <LocationCard key={item.id} location={item} />
        ))}
      </div>
    );
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
