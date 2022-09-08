import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Ticker from 'react-ticker';
import 'config/i18n';

import Button from 'components/button/Button';
import routerPaths from 'components/navigation/paths';

import style from './Main.module.scss';

function MainPage(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const tickerPhrases = [
    t('main.tickerPhrase1'),
    t('main.tickerPhrase2'),
    t('main.tickerPhrase3'),
  ];

  return (
    <div className={style.content}>
      <h1>
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
        {tickerPhrases.map((el) => (
          <Ticker offset="run-in" speed={25} mode="await">
            {(): JSX.Element => <p>{el}</p>}
          </Ticker>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
