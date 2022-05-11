import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';

import 'config/i18n';

import { selectors } from 'components/selectors';
import Cards from 'components/card/Cards';

import { ListTypes } from 'types/generalTypes';
import useTypeSelector from 'hooks/useTypeSelector';
import fetchCharacters from 'store/action-creators/moreCharacters';
import fetchLocations from 'store/action-creators/locations/moreLocations';

interface ListProps {
  type: ListTypes;
}

function List({ type }: ListProps): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useTypeSelector(selectors[type]);

  const dispatch = useDispatch();

  const fetchFunctions = {
    [ListTypes.character]: fetchCharacters,
    [ListTypes.location]: fetchLocations,
  };

  useEffect(() => {
    dispatch(fetchFunctions[type](page));
    setPage(page + 1);
  }, []);

  const nextPage = (): void => {
    setPage(page + 1);
    dispatch(fetchFunctions[type](page));
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
      hasMore
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
    >
      <Cards type={type} />
    </InfiniteScroll>
  );
}

export default List;
