import React from 'react';
import { useTranslation } from 'react-i18next';

import { CharacterProps } from 'types/characterTypes';
import 'config/i18n';

import style from './CharacterCard.module.scss';

interface Character {
  character: CharacterProps;
}

function CharacterCard({ character }: Character): JSX.Element {
  const { t } = useTranslation();
  return (
    <article className={style.CardWrapper}>
      <div className={style.CardImage}>
        <div className={style.Status}>{character.status}</div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={style.CardContent}>
        <div className={style.NameSection}>
          <a href={character.url}>
            <h2>
              {character.name}, {character.id}
            </h2>
          </a>
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
