import React from 'react';

import { useTranslation } from 'react-i18next';
import 'config/i18n';
import { Link } from 'react-router-dom';

import { CardProps } from 'types/characterTypes';
import style from './CharacterCard.module.scss';

function CharacterCard({ character }: CardProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardImage}>
        <div className={style.Status}>{character.status}</div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={style.CardContent}>
        <div className={style.NameSection}>
          <Link to={`/character/${character.id}`}>
            <h2>
              {character.name}, {character.id}
            </h2>
          </Link>
          <h6>
            {character.species}, {character.gender}
          </h6>
        </div>
        <div className={style.description}>
          <a href={character.episode[0]}>{t('character.firstSeen')}</a>
          <a href={character.origin.url}>
            {t('character.origin', { name: character.origin.name })}
          </a>
        </div>
      </div>
    </article>
  );
}

export default React.memo(CharacterCard);
