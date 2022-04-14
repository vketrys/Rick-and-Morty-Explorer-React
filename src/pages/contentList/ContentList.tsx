import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'config/i18n'

import CharacterList from 'components/lists/CharacterLists'
import Button from 'components/button/Button'
import style from './ContentList.module.scss'

interface PageName {
  name: string
}

function ContentList({ name }: PageName): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className={style.content}>
      <h1>
        {t('title')} <p>{t(`${name}.page`)}</p>
      </h1>
      <div className={style.characterList}>
        <CharacterList />
      </div>
      <Button label={t('home')} onClick={(): void => navigate('/home')} />
    </div>
  )
}

export default ContentList
