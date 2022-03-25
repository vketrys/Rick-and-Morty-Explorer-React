import React from 'react'
import { useNavigate } from 'react-router-dom'

import styleButton from './Button.module.scss'

interface Props {
  page: string
}

function Button({ page }: Props): JSX.Element {
  const navigate = useNavigate()
  return (
    <button
      className={styleButton.button}
      type="button"
      onClick={(): void => navigate(`/${page}`)}
    >
      <span className={styleButton.span} />
      {page}
    </button>
  )
}

export default Button
