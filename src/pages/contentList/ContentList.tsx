import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'config/i18n';

import Button from 'components/button/Button';
import routerPaths from '../../components/navigation/paths';
import style from './ContentList.module.scss';
import List from './List';

interface PageName {
  type: string;
}

function ContentList({ type }: PageName): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <h1>
        {t('title')} <p>{t(`${type}.page`)}</p>
      </h1>
      <div className={style.characterListContainer}>
        <List type={type} />
      </div>
      <Button
        label={t('home')}
        onClick={(): void => navigate(routerPaths.home)}
      />
    </div>
  );
}

export default ContentList;
