import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import EpisodeCard from 'components/card/episode/EpisodeCard';
import { URL_ID_POSITION } from 'components/selectors';
import paths from 'components/navigation/paths';

import fetchStarringEpisodes from 'store/action-creators/starring/episodes/fetchStarringEpisodes';
import useTypeSelector from 'hooks/useTypeSelector';
import useCharacter from 'hooks/useCharacter';
import { Episode } from 'types/episodeTypes';

import style from './CharacterInfo.module.scss';

type CharacterParams = {
  id: string;
};

export default function CharacterInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { episodes } = useTypeSelector((state) => state.starringEpisodes);

  const { id } = useParams<CharacterParams>();
  const idNum = id ?? '1';

  const character = useCharacter(idNum);

  const ids: string[] = [];
  character.episode.map((url) => {
    const id = url.slice(URL_ID_POSITION.episode);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringEpisodes(ids));
  }, [character]);

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
              <Link
                to={`${paths.location}/${character.origin.url.slice(
                  URL_ID_POSITION.location
                )}`}
              >
                {t('character.origin')} <br /> {character.origin.name} <br />
              </Link>
              <Link
                to={`${paths.episode}/${character.episode[0].slice(
                  URL_ID_POSITION.episode
                )}`}
              >
                {t('character.firstSeen')}
              </Link>
            </div>
            <div className={style.Episodes}>
              <InfiniteScroll
                dataLength={episodes.length}
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
