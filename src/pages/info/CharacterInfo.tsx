import Button from 'components/button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import style from './CharacterInfo.module.scss';

export default function CharacterInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.CharacterInfo}>
          <div className={style.Image}>char image</div>
          <div className={style.Info}>info</div>
        </div>
        <div className={style.CharacterDescription}>
          <div className={style.Name}>Rick Sanchezzzzzzzzzzzz</div>
          <div className={style.Description}>
            <div className={style.Links}>
              Origin: Earth-C137 <br /> Last seen at ...
            </div>
            <div className={style.Episodes}>Episodes</div>
          </div>
        </div>
      </div>
      <div className={style.Button}>
        <Button label={t('home')} onClick={(): void => navigate('*')} />
      </div>
    </div>
  );
}
