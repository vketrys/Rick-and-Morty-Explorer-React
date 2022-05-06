import React from 'react';

import { useTranslation } from 'react-i18next';
import 'config/i18n';

import style from './LocationCard.module.scss';

interface LocationCardProps {
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    url: string;
    residents: string[];
  };
}

function LocationCard({ location }: LocationCardProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <a href={location.url}>
            <h2>{location.name}</h2>
          </a>
          <h6>{location.type}</h6>
          <p>{t('location.dimension', { name: location.dimension })}</p>
        </div>
        <div className={style.Residents}>
          <a href={location.residents[0]}>{t('location.residents')}</a>
        </div>
      </div>
    </article>
  );
}

export default React.memo(LocationCard);
