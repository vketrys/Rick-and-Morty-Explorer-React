import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Location } from 'types/locationTypes';
import paths from 'components/navigation/paths';
import { getItemIdFromURL } from 'components/selectors';

import 'config/i18n';

import style from './LocationCard.module.scss';

export interface LocationCardProps {
  item: Location;
}

function LocationCard({ item }: LocationCardProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <Link
            to={`${paths.location}/${item.url.slice(
              getItemIdFromURL.location
            )}`}
          >
            <h2>{item.name}</h2>
          </Link>
          <h6>{item.type}</h6>
          <p>{t('location.dimension', { name: item.dimension })}</p>
        </div>
        <div className={style.Residents}>
          <p>
            {t('location.residents')}: {item.residents.length}
          </p>
        </div>
      </div>
    </article>
  );
}

export default LocationCard;
