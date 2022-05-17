import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { LocationProps } from 'types/locationTypes';
import paths from 'components/navigation/paths';

import 'config/i18n';

import style from './LocationCard.module.scss';

export interface Location {
  location: LocationProps;
}

function LocationCard({ location }: Location): JSX.Element {
  const { t } = useTranslation();
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <Link to={`${paths.location}/${location.url.slice(41)}`}>
            <h2>{location.name}</h2>
          </Link>
          <h6>{location.type}</h6>
          <p>{t('location.dimension', { name: location.dimension })}</p>
        </div>
        <div className={style.Residents}>
          <p>
            {t('location.residents')}: {location.residents.length}
          </p>
        </div>
      </div>
    </article>
  );
}

export default React.memo(LocationCard);
