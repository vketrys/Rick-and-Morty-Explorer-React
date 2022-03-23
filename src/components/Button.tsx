import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'

interface Props {
  page: string
}

export default function Button({ page }: Props) {
  return (
    <Link to={`/${page}`}>
      <button type="button">
        <span />
        {page}
      </button>
    </Link>
  )
}
