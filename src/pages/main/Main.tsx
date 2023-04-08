import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import Button from 'components/button/Button';
import routerPaths from 'components/navigation/paths';
import MemoTicker from 'components/ticker/MemoTicker';
import RandomEpisodeModal from 'components/modal/RandomEpisodeModal';

import style from './Main.module.scss';

function MainPage(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <div className={style.Content}>
      <div className={style.RandomButton}>
        <Button label="get random episode" onClick={openModal} isCTA={false} />
      </div>
      <RandomEpisodeModal modalState={modalIsOpen} closeModal={closeModal} />
      <h1 className={style.Title}>
        {t('title')} {t('main.page')}
      </h1>
      <div className={style.Buttons}>
        <Button
          label={t('main.characterButton')}
          onClick={(): void => navigate(routerPaths.character)}
          isCTA
        />
        <Button
          label={t('main.locationButton')}
          onClick={(): void => navigate(routerPaths.location)}
          isCTA
        />
        <Button
          label={t('main.episodeButton')}
          onClick={(): void => navigate(routerPaths.episode)}
          isCTA
        />
      </div>
      <div className={style.Bottom}>
        <MemoTicker />
      </div>
    </div>
  );
}

export default MainPage;
