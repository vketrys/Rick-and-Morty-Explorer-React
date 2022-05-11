import React from 'react';
import { useTranslation } from 'react-i18next';

import 'config/i18n';

import { EpisodeProps } from 'types/episodeTypes';

import style from './EpisodeCard.module.scss';

export interface Episode {
  episode: EpisodeProps;
}

function EpisodeCard({ episode }: Episode): JSX.Element {
  const { t } = useTranslation();

  const showSeason = episode.episode.charAt(2);
  const ep = episode.episode.slice(4);
  let showEpisode;

  if (ep[0] !== '0') {
    showEpisode = ep;
  } else [, ...showEpisode] = ep;

  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <a href={episode.url}>
            <h2>{episode.name}</h2>
          </a>
          <h6>{t('episode.season', { season: showSeason })}</h6>
          <h6>{t('episode.episode', { episode: showEpisode })}</h6>
          <div className={style.Characters}>
            <a href={episode.characters[0]}>{t('episode.characters')}</a>
          </div>
        </div>
        <p>{episode.air_date}</p>
      </div>
    </article>
  );
}

export default React.memo(EpisodeCard);
