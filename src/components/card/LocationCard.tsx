import React from 'react'

import { useTranslation } from 'react-i18next'
import 'config/i18n'
import { LocationType } from 'types/locationTypes'

import style from './LocationCard.module.scss'

interface CardProps {
  location: LocationType
}

function LocationCard({ location }: CardProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardContent}>
        <div className={style.Description}>
          <a href={location.url}>
            <h2>{location.name}</h2>
          </a>
          <h6>{location.type}</h6>
          <p>Dimension: {location.dimension}</p>
        </div>
        <div className={style.Residents}>
          <a href={location.residents[0]}> Residents... </a>
        </div>
      </div>
    </article>
  )
}

export default React.memo(LocationCard)
