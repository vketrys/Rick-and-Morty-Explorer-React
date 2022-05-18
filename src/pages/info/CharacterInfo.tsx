import React from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';

import fetchCharacters from 'store/action-creators/characters/moreCharacters';

import Button from 'components/button/Button';
import EpisodeCard from 'components/card/EpisodeCard';

import useTypeSelector from 'hooks/useTypeSelector';
import useStarringEpisodes from 'hooks/useStarringEpisodes';

import { AppThunk } from 'types/thunkTypes';

import style from './CharacterInfo.module.scss';

type CharacterParams = {
  id: string;
};

export default function CharacterInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data } = useTypeSelector((state) => state.character);

  let { id } = useParams<CharacterParams>();
  if (typeof id === 'undefined') {
    id = '1';
  }

  const character = data[+id - 1];

  const ids: string[] = [];
  character.episode.map((url) => ids.push(url.slice(40)));

  const episodes = useStarringEpisodes(ids);

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.CharacterInfo}>
          <div className={style.Image}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={style.Info}>
            <p>
              {t('info.status')} <b>{character.status}</b>
            </p>
            <p>
              {t('info.species')} <b>{character.species}</b>
            </p>
            <p>
              {t('info.type')} <b>{character.type}</b>
            </p>
            <p>
              {t('info.gender')} <b>{character.gender}</b>
            </p>
          </div>
        </div>
        <div className={style.CharacterDescription}>
          <div className={style.Name}>{character.name}</div>
          <div className={style.Description}>
            <div className={style.Links}>
              {t('character.origin', { name: character.origin.name })} <br />
              <a href={character.episode[0]}>{t('character.firstSeen')}</a>
            </div>
            <div className={style.Episodes}>
              <InfiniteScroll
                dataLength={data.length}
                next={(): ((page: number) => AppThunk<void>) => fetchCharacters}
                hasMore
                loader={<h4>{t('loading')}</h4>}
                height={450}
                endMessage={<h1>{t('scrollEnd')}</h1>}
              >
                <div className={style.EpisodesContainer}>
                  {episodes.map((item) => (
                    <EpisodeCard key={item.id} episode={item} />
                  ))}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Button}>
        <Button label={t('back')} onClick={(): void => navigate(-1)} />
      </div>
    </div>
  );
}
