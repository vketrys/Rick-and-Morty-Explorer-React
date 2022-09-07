import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import 'config/i18n';
import routerPaths from 'components/navigation/paths';

import { Episode } from 'types/episodeTypes';

import style from './EpisodeCard.module.scss';
import episodeSlice from './episodeSlice';

export interface EpisodeCardProps {
  item: Episode;
}

function EpisodeCard({ item }: EpisodeCardProps): JSX.Element {
  const { t } = useTranslation();

  const showSeason = item.episode.charAt(2);
  const showEpisode = episodeSlice(item);

  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <Link to={`${routerPaths.episode}/${item.id}`}>
            <h2>{item.name}</h2>
          </Link>
          <h6>{t('episode.season', { season: showSeason })}</h6>
          <h6>{t('episode.episode', { episode: showEpisode })}</h6>
          <div className={style.Characters}>
            <p>
              {t('episode.characters')} {item.characters.length}
            </p>
          </div>
        </div>
        <p>{item.air_date}</p>
      </div>
    </article>
  );
}

export default EpisodeCard;
