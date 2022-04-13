import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../config/i18n'

import Button from '../../components/button/Button'
import style from './Main.module.scss'

function MainPage(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const characterRoute = 'character?page=1'
  console.log(`${process.env.REACT_APP_API_URL}${characterRoute}`)

  return (
    <div className={style.content}>
      <h1>
        {t('title')} <p>{t('main.page')}</p>
      </h1>
      <div className={style.buttons}>
        <Button
          label={t('main.characterButton')}
          onClick={(): void => navigate('/characters')}
        />
        <Button
          label={t('main.locationButton')}
          onClick={(): void => navigate('/locations')}
        />
        <Button
          label={t('main.episodeButton')}
          onClick={(): void => navigate('/episodes')}
        />
      </div>
    </div>
  )
}

export default MainPage
