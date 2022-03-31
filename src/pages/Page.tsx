import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../config/i18n'

import Button from '../components/button/Button'
import style from './Pages.module.scss'

interface PageName {
  name: string
}

function Page({ name }: PageName): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className={style.content}>
      <h1>
        {t('title')} <p>{t(`${name}.page`)}</p>
      </h1>
      <Button label={t('home')} onClick={(): void => navigate('/home')} />
    </div>
  )
}

export default Page
