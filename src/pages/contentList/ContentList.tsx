import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import 'config/i18n';

import { ListTypes } from 'types/generalTypes';

import Button from 'components/button/Button';
import routerPaths from '../../components/navigation/paths';

import style from './ContentList.module.scss';

import List from './List';

interface ContentListProps {
  type: ListTypes;
}

function ContentList({ type }: ContentListProps): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={style.Content}>
      <h1 className={style.Title}>
        {t('title')} <p>{t(`${type}.page`)}</p>
      </h1>
      <div className={style.characterListContainer}>
        <List type={type} />
      </div>
      <Button
        label={t('home')}
        onClick={(): void => navigate(routerPaths.home)}
        isCTA
      />
    </div>
  );
}

export default ContentList;
