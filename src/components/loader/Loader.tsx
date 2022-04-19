import React from 'react'

import { useTranslation } from 'react-i18next'
import 'config/i18n'
import style from './Loader.module.scss'

export default function Loader(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={style.LoaderContainer}>
      <div className={style.LoaderText}>
        <span className={style.LoaderWords}>{t('loadingPhrase')}</span>
      </div>
    </div>
  )
}
