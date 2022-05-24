import React from 'react';
import { useTranslation } from 'react-i18next';

import { Location } from 'types/locationTypes';

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
          <a href={item.url}>
            <h2>{item.name}</h2>
          </a>
          <h6>{item.type}</h6>
          <p>{t('location.dimension', { name: item.dimension })}</p>
        </div>
        <div className={style.Residents}>
          <a href={item.residents[0]}>{t('location.residents')}</a>
        </div>
      </div>
    </article>
  );
}

export default LocationCard;
