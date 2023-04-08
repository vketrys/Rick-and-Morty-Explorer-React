import React from 'react';
import Switcher from 'components/switcher/Switcher';

import style from './Layout.module.scss';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={style.banner}>
      <div className={style.Lang}>
        <Switcher />
      </div>
      {children}
    </div>
  );
}

export default Layout;
