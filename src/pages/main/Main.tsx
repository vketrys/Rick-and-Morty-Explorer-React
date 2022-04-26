import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import Button from 'components/button/Button';
import paths from '../../components/navigation/paths';
import style from './Main.module.scss';

function MainPage(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={style.content}>
      <h1>
        {t('title')} <p>{t('main.page')}</p>
      </h1>
      <div className={style.buttons}>
        <Button
          label={t('main.characterButton')}
          onClick={(): void => navigate(paths.character)}
        />
        <Button
          label={t('main.locationButton')}
          onClick={(): void => navigate(paths.location)}
        />
        <Button
          label={t('main.episodeButton')}
          onClick={(): void => navigate(paths.episode)}
        />
      </div>
    </div>
  );
}

export default MainPage;
