import React from 'react'
import { useNavigate } from 'react-router-dom'

import styleButton from './Button.module.scss'

interface Props {
  page: string
}

function Button({ page }: Props) {
  const navigate = useNavigate()
  return (
    <button
      className={styleButton.button}
      type="button"
      onClick={() => navigate(`/${page}`)}
    >
      <span className={styleButton.span} />
      {page}
    </button>
  )
}

export default Button
