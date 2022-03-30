import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../config/i18n'

import Button from '../components/button/Button'
import style from './Pages.module.scss'

function CharacterPage(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={style.content}>
      <h1>
        {t('title')} <p>{t('character.page')}</p>
      </h1>
      <Button label={t('home')} onClick={(): void => navigate('/home')} />
    </div>
  )
}

export default CharacterPage
