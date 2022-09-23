import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSwitch from 'react-switch';

import GlobeIcon from 'img/globeIcon.svg';
import IconEN from 'img/EN.png';
import IconRU from 'img/RU.png';

import languagesKeys from 'variables/languages';
import colors from 'variables/colors';
import style from './Switcher.module.scss';

function Switcher(): JSX.Element {
  const { i18n } = useTranslation();

  const [switcher, setSwitcher] = useState(false);

  const handleChange = (): void => {
    setSwitcher(!switcher);

    if (switcher) {
      i18n.changeLanguage(languagesKeys.en);
    } else {
      i18n.changeLanguage(languagesKeys.ru);
    }
  };

  return (
    <div>
      <ReactSwitch
        onChange={handleChange}
        checked={switcher}
        offColor={colors.white}
        onColor={colors.white}
        checkedIcon={
          <img src={IconEN} height={25} alt="EN" className={style.image} />
        }
        uncheckedIcon={
          <img src={IconRU} height={25} alt="RU" className={style.image} />
        }
        checkedHandleIcon={<img src={GlobeIcon} alt="globe" />}
        uncheckedHandleIcon={<img src={GlobeIcon} alt="globe" />}
      />
    </div>
  );
}

export default Switcher;
