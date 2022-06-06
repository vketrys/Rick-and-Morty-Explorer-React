import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import { getItemIdFromURL } from 'components/selectors';
import CharacterCard from 'components/card/character/CharacterCard';
import fetchStarringCharacters from 'store/action-creators/starring/characters/fetchStarringCharacters';

import { Character } from 'types/characterTypes';
import useEpisode from 'hooks/useEpisode';
import useTypeSelector from 'hooks/useTypeSelector';

import style from './LocationInfo.module.scss';

type EpisodeParams = {
  id: string;
};

export default function EpisodeInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { characters } = useTypeSelector((state) => state.starringCharacters);

  const { id } = useParams<EpisodeParams>();
  const idNum = id ?? '1';

  const episode = useEpisode(idNum);

  const ids: string[] = [];
  episode.characters.map((url) => {
    const id = url.slice(getItemIdFromURL.character);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringCharacters(ids));
  }, [episode]);

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
              dataLength={characters.length}
              next={(): Character[] => characters}
              hasMore
              loader={<h4>{t('loading')}</h4>}
              height={550}
              endMessage={<h1>{t('scrollEnd')}</h1>}
            >
              {characters.map((item) => (
                <CharacterCard key={item.id} item={item} />
              ))}
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
