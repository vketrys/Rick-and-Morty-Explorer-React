import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import EpisodeCard from 'components/card/episode/EpisodeCard';

// eslint-disable-next-line max-len
import fetchStarringEpisodes from 'store/action-creators/starring/episodes/fetchStarringEpisodes';
import useTypeSelector from 'hooks/useTypeSelector';
import { Episode } from 'types/episodeTypes';

import style from './CharacterInfo.module.scss';

type CharacterParams = {
  id: string;
};

export default function CharacterInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data } = useTypeSelector((state) => state.character);
  const { episodes } = useTypeSelector((state) => state.starringEpisodes);

  let { id } = useParams<CharacterParams>();
  id = id ?? '1';

  const character = data[+id - 1];

  const ids: string[] = [];
  character.episode.map((url) => {
    const id = url.slice(40);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringEpisodes(ids));
  }, []);

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
              {t('character.origin')} <br /> {character.origin.name} <br />
              <a href={character.episode[0]}>{t('character.firstSeen')}</a>
            </div>
            <div className={style.Episodes}>
              <InfiniteScroll
                dataLength={data.length}
                next={(): Episode[] => episodes}
                hasMore
                loader={<h4>{t('loading')}</h4>}
                height={450}
                endMessage={<h1>{t('scrollEnd')}</h1>}
              >
                <div className={style.EpisodesContainer}>
                  {episodes.map((item) => (
                    <EpisodeCard key={item.id} item={item} />
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
