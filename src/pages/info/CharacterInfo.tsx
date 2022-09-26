import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import EpisodeCard from 'components/card/episode/EpisodeCard';
import { URL_ID_POSITION } from 'components/selectors';
import paths from 'components/navigation/paths';

import fetchStarringEpisodes from 'store/action-creators/starring/episodes/fetchStarringEpisodes';
import useTypeSelector from 'hooks/useTypeSelector';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { Episode } from 'types/episodeTypes';
import { Character } from 'types/characterTypes';

import style from './CharacterInfo.module.scss';

interface CharacterInfoProps {
  item: Character;
}

export default function CharacterInfo({
  item,
}: CharacterInfoProps): JSX.Element {
  const { height } = useWindowDimensions();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { episodes } = useTypeSelector((state) => state.starringEpisodes);

  // const { characterId } = useParams<CharacterParams>();
  // const idNum = id ?? '1';

  // const character = useItem[type](idNum);

  const ids: string[] = [];
  item.episode.map((url) => {
    const id = url.slice(URL_ID_POSITION.episode);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringEpisodes(ids));
  }, [item]);

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.CharacterInfo}>
          <div className={style.Image}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className={style.Info}>
            <p>
              {t('info.status')} <b>{item.status}</b>
            </p>
            <p>
              {t('info.species')} <b>{item.species}</b>
            </p>
            <p>
              {t('info.type')} <b>{item.type}</b>
            </p>
            <p>
              {t('info.gender')} <b>{item.gender}</b>
            </p>
          </div>
        </div>
        <div className={style.CharacterDescription}>
          <div className={style.Name}>{item.name}</div>
          <div className={style.Description}>
            <div className={style.Links}>
              <Link
                to={`${paths.location}/${item.origin.url.slice(
                  URL_ID_POSITION.location
                )}`}
              >
                {t('character.origin')} <br /> {item.origin.name} <br />
              </Link>
              <Link
                to={`${paths.episode}/${item.episode[0].slice(
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
                height={height / 3}
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
