import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../utils/i18n'

import Button from '../../components/button/Button'
import Card from '../../components/card/Card'

import style from './Character.module.scss'
import CharacterList from '../../components/lists/CharacterLists'

function CharacterPage(): JSX.Element {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()

  return (
    <div className={style.content}>
      <h1>
        {t('character.title')} <p>{t('character.page')}</p>
      </h1>
      <div className={style.characterList}>
        <CharacterList />
      </div>
      <Button
        label={t('character.home')}
        onClick={(): void => navigate('/home')}
      />
    </div>
  )
}

export default CharacterPage
