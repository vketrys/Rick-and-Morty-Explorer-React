import React from 'react';

import portal from '../../img/portal.png';
import style from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isCTA: boolean;
}

function Button({ label, onClick, isCTA = true }: ButtonProps): JSX.Element {
  return (
    <button
      className={isCTA ? style.button : style.buttonImage}
      type="button"
      onClick={onClick}
    >
      {isCTA ? (
        <span className={style.span} />
      ) : (
        <img className={style.portal} src={portal} alt="portal" />
      )}
      <span className={style.span} />
      <p className={style.label}>{label}</p>
    </button>
  );
}

export default Button;
