import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import CharacterCard from 'components/card/character/CharacterCard';
// eslint-disable-next-line max-len
import fetchStarringCharacters from 'store/action-creators/starring/characters/fetchStarringCharacters';

import { Character } from 'types/characterTypes';

import useTypeSelector from 'hooks/useTypeSelector';

import style from './LocationInfo.module.scss';

type EpisodeParams = {
  id: string;
};

export default function EpisodeInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data } = useTypeSelector((state) => state.episode);
  const { characters } = useTypeSelector((state) => state.starringCharacters);

  let { id } = useParams<EpisodeParams>();
  id = id ?? '1';

  const episode = data[+id - 1];

  const ids: string[] = [];
  episode.characters.map((url) => {
    const id = url.slice(42);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringCharacters(ids));
  }, []);

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
          <div className={style.Name}>{episode.name}</div>
          <div className={style.Description}>
            <p>{episode.episode}</p>
            <p>{episode.air_date}</p>
          </div>
        </div>
        <div className={style.Characters}>
          <div className={style.Label}>Starring</div>
          <div className={style.Cards}>
            <InfiniteScroll
              dataLength={data.length}
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
