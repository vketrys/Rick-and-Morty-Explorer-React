import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTranslation } from 'react-i18next'
import 'config/i18n'
import { AppThunk } from 'types/thunkTypes'
import fetchMoreCharacters from 'store/action-creators/moreCharacters'

import useTypeSelector from 'hooks/useTypeSelector'
import fetchCharacters from 'store/action-creators/character'
import style from '../card/CharacterCard.module.scss'
import CharacterCard from '../card/CharacterCard'

const CharacterList: React.FC = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const { characters, error, isLoading } = useTypeSelector(
    (state) => state.character
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => setPage((page) => page + 1), [characters])

  if (isLoading) {
    return <h1>{t('loading')}</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={(): AppThunk<void> => dispatch(fetchMoreCharacters(page))}
      hasMore
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
      className={style.Scrollbar}
    >
      <div className={style.CardsContainer}>
        {characters.map((character) => (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default CharacterList
