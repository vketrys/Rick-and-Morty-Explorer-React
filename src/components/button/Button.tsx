import React from 'react'

import style from './Button.module.scss'

interface ButtonProps {
  label: string
  onClick: () => void
}

function Button({ label, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      <span className={style.span} />
      {label}
    </button>
  )
}

export default Button
