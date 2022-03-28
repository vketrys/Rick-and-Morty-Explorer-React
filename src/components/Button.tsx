import React from 'react'
import { useNavigate } from 'react-router-dom'

import styleButton from './Button.module.scss'

interface ButtonProps {
  page: string
  label: string
}

function Button({ page, label }: ButtonProps): JSX.Element {
  const navigate = useNavigate()
  function link(): void {
    navigate(`/${page}`)
  }
  return (
    <button className={styleButton.button} type="button" onClick={link}>
      <span className={styleButton.span} />
      {label}
    </button>
  )
}

export default Button
