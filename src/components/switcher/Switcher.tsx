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

  const [isSwitched, setIsSwitched] = useState(false);

  const handleChange = (): void => {
    setIsSwitched(!isSwitched);

    if (isSwitched) {
      i18n.changeLanguage(languagesKeys.en);
    } else {
      i18n.changeLanguage(languagesKeys.ru);
    }
  };

  return (
    <div>
      <ReactSwitch
        onChange={handleChange}
        checked={isSwitched}
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
