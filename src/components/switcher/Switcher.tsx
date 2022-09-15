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
  const [language, setLanguage] = useState(languagesKeys.ru);

  const handleChange = (): void => {
    setSwitcher(!switcher);

    switch (language) {
      case 'en':
        setLanguage(languagesKeys.ru);
        break;
      case 'ru':
        setLanguage(languagesKeys.en);
        break;
      default:
        setLanguage(languagesKeys.ru);
        break;
    }
    i18n.changeLanguage(language);
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
