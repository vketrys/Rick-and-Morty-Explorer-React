import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTranslation } from 'react-i18next'
import 'config/i18n'
import fetchCharacters from 'store/action-creators/moreCharacters'

import { CharacterSelectors } from 'components/selectors'
import style from '../card/CharacterCard.module.scss'
import CharacterCard from '../card/CharacterCard'

const CharacterList: React.FC = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = CharacterSelectors()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters(page))
    setPage((page) => page + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextPage = (): void => {
    setPage((page) => page + 1)
    dispatch(fetchCharacters(page))
  }

  if (isLoading) {
    return <h1>{t('loading')}</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={nextPage}
      hasMore
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
    >
      <div className={style.CardsContainer}>
        {data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default CharacterList
