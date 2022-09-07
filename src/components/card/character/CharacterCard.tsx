import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Character } from 'types/characterTypes';
import 'config/i18n';
import paths from 'components/navigation/paths';

import style from './CharacterCard.module.scss';

export interface CharacterCardProps {
  item: Character;
}

function CharacterCard({ item }: CharacterCardProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardImage}>
        <div className={style.Status}>{item.status}</div>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={style.CardContent}>
        <div className={style.NameSection}>
          <Link to={`${paths.character}/${item.id}`}>
            <h2>
              {item.name}, {item.id}
            </h2>
          </Link>
          <h6>
            {item.species}, {item.gender}
          </h6>
        </div>
        <div className={style.description}>
          <a href={item.episode[0]}>{t('character.firstSeen')}</a>
          <a href={item.origin.url}>
            {t('character.origin', { name: item.origin.name })}
          </a>
        </div>
      </div>
    </article>
  );
}

export default CharacterCard;
