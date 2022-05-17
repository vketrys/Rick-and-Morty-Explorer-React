import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { CharacterProps } from 'types/characterTypes';
import 'config/i18n';

import paths from 'components/navigation/paths';

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
          <Link to={`${paths.character}/${character.id}`}>
            <h2>
              {character.name}, {character.id}
            </h2>
          </Link>
          <h6>
            {character.species}, {character.gender}
          </h6>
        </div>
        <div className={style.description}>
          <Link to={`${paths.episode}/${character.episode[0].slice(40)}`}>
            {t('character.firstSeen')}
          </Link>
          <Link to={`${paths.location}/${character.origin.url.slice(41)}`}>
            {t('character.origin', { name: character.origin.name })}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default React.memo(CharacterCard);
