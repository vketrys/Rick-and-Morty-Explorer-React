import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import { GeneralSelectors } from 'components/selectors';

import fetchCharacters from 'store/action-creators/characters/moreCharacters';
import fetchLocations from 'store/action-creators/locations/moreLocations';
import fetchEpisodes from 'store/action-creators/episodes/moreEpisodes';
import { AppThunk } from 'types/thunkTypes';
import Cards from 'components/card/Card';
import { listTypes } from '../../types/generalTypes';
import hasMore from './hasMore';

interface PageName {
  type: string;
}

function List({ type }: PageName): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = GeneralSelectors(type);

  const dispatch = useDispatch();

  const fetchData = (page: number): AppThunk<void> => {
    switch (type) {
      case listTypes.character:
        return fetchCharacters(page);
      case listTypes.location:
        return fetchLocations(page);
      case listTypes.episode:
        return fetchEpisodes(page);
      default:
        return fetchCharacters(page);
    }
  };

  useEffect(() => {
    dispatch(fetchData(page));
    setPage((page) => page + 1);
  }, []);

  const nextPage = (): void => {
    setPage((page) => page + 1);
    dispatch(fetchData(page));
  };

  if (isLoading) {
    return <h1>{t('loading')}</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={nextPage}
      hasMore={hasMore(type, page)}
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<h1>{t('scrollEnd')}</h1>}
    >
      <Cards type={type} />
    </InfiniteScroll>
  );
}

export default List;
