import React from 'react';
import { useTranslation } from 'react-i18next';

import style from './Layout.module.scss';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps): JSX.Element {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={style.banner}>
      <div className={style.Lang}>
        <div className={style.LangEN}>
          <button type="button" onClick={(): void => changeLanguage('en')}>
            {' '}
          </button>
        </div>
        <div className={style.LangRU}>
          <button
            className="RU"
            type="button"
            onClick={(): void => changeLanguage('ru')}
          >
            {' '}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;
