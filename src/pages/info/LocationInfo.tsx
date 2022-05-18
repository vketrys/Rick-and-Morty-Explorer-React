import React from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'components/button/Button';
import CharacterCard from 'components/card/CharacterCard';

import fetchCharacters from 'store/action-creators/characters/moreCharacters';
import { AppThunk } from 'types/thunkTypes';

import useTypeSelector from 'hooks/useTypeSelector';
import useStarringCharacters from 'hooks/useStarringCharacters';

import style from './LocationInfo.module.scss';

type LocationParams = {
  id: string;
};

export default function LocationInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data } = useTypeSelector((state) => state.location);

  let { id } = useParams<LocationParams>();
  if (typeof id === 'undefined') {
    id = '1';
  }

  const location = data[+id - 1];

  const ids: string[] = [];
  location.residents.map((url) => ids.push(url.slice(42)));

  const characters = useStarringCharacters(ids);

  const noChars = (): JSX.Element => {
    if (characters.length) {
      return (
        <div className={style.EpisodesContainer}>
          {characters.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      );
    }
    return <p>This place was destroyed</p>;
  };

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.LocationInfo}>
          <div className={style.Name}>{location.name}</div>
          <div className={style.Description}>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
          </div>
        </div>
        <div className={style.Characters}>
          <div className={style.Label}>Residents</div>
          <div className={style.Cards}>
            <InfiniteScroll
              dataLength={data.length}
              next={(): ((page: number) => AppThunk<void>) => fetchCharacters}
              hasMore
              loader={<h4>{t('loading')}</h4>}
              height={550}
              endMessage={<h1>{t('scrollEnd')}</h1>}
            >
              <div className={style.EpisodesContainer}>{noChars()}</div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <div className={style.Button}>
        <Button label={t('back')} onClick={(): void => navigate(-1)} />
      </div>
    </div>
  );
}
