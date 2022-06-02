import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import { getNumberFromURL } from 'components/selectors';
import CharacterCard from 'components/card/character/CharacterCard';
import fetchStarringCharacters from 'store/action-creators/starring/characters/fetchStarringCharacters';

import { Character } from 'types/characterTypes';

import useTypeSelector from 'hooks/useTypeSelector';
import useLocation from 'hooks/useLocation';

import style from './LocationInfo.module.scss';

type LocationParams = {
  id: string;
};

export default function LocationInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { characters } = useTypeSelector((state) => state.starringCharacters);

  const { id } = useParams<LocationParams>();
  const idNum = id ?? '1';

  const location = useLocation(idNum);

  const ids: string[] = [];
  location.residents.map((url) => {
    const id = url.slice(getNumberFromURL.character);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringCharacters(ids));
  }, [location]);

  const noChars = (): JSX.Element => {
    if (characters.length) {
      return (
        <div className={style.EpisodesContainer}>
          {characters.map((item) => (
            <CharacterCard key={item.id} item={item} />
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
              dataLength={characters.length}
              next={(): Character[] => characters}
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
