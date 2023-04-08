import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Location } from 'types/locationTypes';
import paths from 'components/navigation/paths';
import { URL_ID_POSITION } from 'components/selectors';

import 'config/i18n';

import style from './LocationCard.module.scss';

export interface LocationCardProps {
  item: Location;
}

function LocationCard({ item }: LocationCardProps): JSX.Element {
  const { t } = useTranslation();

  const locationPath = `${paths.location}/${item.url.slice(
    URL_ID_POSITION.location
  )}`;
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <Link to={locationPath}>
            <h2 className={style.Name}>{item.name}</h2>
          </Link>
          <h6 className={style.Type}>{item.type}</h6>
          <p className={style.Dimension}>
            {t('location.dimension', { name: item.dimension })}
          </p>
        </div>
        <div className={style.Residents}>
          <p className={style.ResidentsCount}>
            {t('location.residents')}: {item.residents.length}
          </p>
        </div>
      </div>
    </article>
  );
}

export default LocationCard;
