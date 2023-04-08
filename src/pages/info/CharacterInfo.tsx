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
import useScrollSizer from 'hooks/useScollSizer';

import { Episode } from 'types/episodeTypes';
import { Character } from 'types/characterTypes';
import { ListTypes } from 'types/generalTypes';

import style from './CharacterInfo.module.scss';

interface CharacterInfoProps {
  item: Character;
}

export default function CharacterInfo({
  item,
}: CharacterInfoProps): JSX.Element {
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
            <p className={style.Status}>
              {t('info.status')} <b className={style.InfoBold}>{item.status}</b>
            </p>
            <p className={style.Species}>
              {t('info.species')}
              <b className={style.InfoBold}>{item.species}</b>
            </p>
            <p className={style.Type}>
              {t('info.type')}
              <b className={style.InfoBold}>{item.type ?? '-'}</b>
            </p>
            <p className={style.Gender}>
              {t('info.gender')} <b className={style.InfoBold}>{item.gender}</b>
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
                <b className={style.Origin}>{t('character.origin')}</b> <br />
                {item.origin.name} <br />
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
                height={useScrollSizer(ListTypes.character)}
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
        <Button
          label={t('back')}
          onClick={(): void => navigate(paths.goBack)}
          isCTA
        />
      </div>
    </div>
  );
}
