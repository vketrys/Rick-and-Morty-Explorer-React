import React from 'react';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import useEpisode from 'hooks/useEpisode';

import EpisodeCard from 'components/card/episode/EpisodeCard';
import counts from 'variables/counts';
import getRandomEpisode from './getRandomEpisode';

import style from './RandomEpisodeModal.module.scss';

interface ModalProps {
  modalState: boolean;
  closeModal: () => void;
}

const RandomEpisodeModal = ({
  modalState,
  closeModal,
}: ModalProps): JSX.Element => {
  const { t } = useTranslation();

  const Episode = useEpisode(getRandomEpisode(1, counts.episodes));

  return (
    <ReactModal
      isOpen={modalState}
      className={style.Modal}
      overlayClassName={style.ModalOverlay}
      shouldCloseOnOverlayClick
    >
      <button className={style.Close} type="button" onClick={closeModal}>
        X
      </button>
      <div className={style.ModalContent}>
        <div className={style.Text}>
          <p className={style.Welcome}>
            {t('main.randomEpisode.welcomePhrase1')}
            <br /> {t('main.randomEpisode.welcomePhrase2')}
          </p>
          <p className={style.Wishes}>{t('main.randomEpisode.wishes')}</p>
        </div>
        <div className={style.Episode}>
          <EpisodeCard item={Episode} />
        </div>
      </div>
    </ReactModal>
  );
};

export default RandomEpisodeModal;
