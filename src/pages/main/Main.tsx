import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import Button from 'components/button/Button';
import routerPaths from 'components/navigation/paths';
import MemoTicker from 'components/ticker/MemoTicker';

import style from './Main.module.scss';

function MainPage(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={style.Content}>
      <h1 className={style.Title}>
        {t('title')} {t('main.page')}
      </h1>
      <div className={style.buttons}>
        <Button
          label={t('main.characterButton')}
          onClick={(): void => navigate(routerPaths.character)}
        />
        <Button
          label={t('main.locationButton')}
          onClick={(): void => navigate(routerPaths.location)}
        />
        <Button
          label={t('main.episodeButton')}
          onClick={(): void => navigate(routerPaths.episode)}
        />
      </div>
      <div className={style.bottom}>
        <MemoTicker />
      </div>
    </div>
  );
}

export default MainPage;
