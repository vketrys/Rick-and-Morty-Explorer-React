import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSwitch from 'react-switch';

import GlobeIcon from 'img/globeIcon.svg';
import IconEN from 'img/EN.png';
import IconRU from 'img/RU.png';

function Switcher(): JSX.Element {
  const { i18n } = useTranslation();

  const [languageRu, setLanguageRu] = useState(false);

  const handleChange = (): void => {
    setLanguageRu(!languageRu);
    if (languageRu) {
      i18n.changeLanguage('en');
    } else i18n.changeLanguage('ru');
  };

  return (
    <div>
      <ReactSwitch
        onChange={handleChange}
        checked={languageRu}
        offColor="#fff"
        onColor="#fff"
        checkedIcon={
          <img
            src={IconEN}
            height={25}
            alt="EN"
            style={{ margin: '2px 0 0 2px' }}
          />
        }
        uncheckedIcon={
          <img
            src={IconRU}
            height={25}
            alt="RU"
            style={{ margin: '2px 0 0 2px' }}
          />
        }
        checkedHandleIcon={<img src={GlobeIcon} alt="globe" />}
        uncheckedHandleIcon={<img src={GlobeIcon} alt="globe" />}
      />
    </div>
  );
}

export default Switcher;
