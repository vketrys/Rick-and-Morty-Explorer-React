import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTranslation } from 'react-i18next'
import 'config/i18n'

import LocationCard from 'components/card/LocationCard'
import {
  CharacterSelectors,
  GeneralSelectors,
  LocationSelectors,
} from 'components/selectors'
import CharacterCard from 'components/card/CharacterCard'
import fetchCharacters from 'store/action-creators/moreCharacters'
import fetchLocations from 'store/action-creators/locations/moreLocations'
import { AppThunk } from 'types/thunkTypes'

import styleCharacter from 'components/card/CharacterCard.module.scss'
import styleLocation from 'components/card/LocationCard.module.scss'

interface PageName {
  type: string
}

function List({ type }: PageName): JSX.Element {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = GeneralSelectors(type)

  const dispatch = useDispatch()

  const func = (page: number): AppThunk<void> => {
    if (type === 'character') return fetchCharacters(page)
    return fetchLocations(page)
  }

  useEffect(() => {
    dispatch(func(page))
    setPage((page) => page + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextPage = (): void => {
    setPage((page) => page + 1)
    dispatch(func(page))
  }

  if (isLoading) {
    return <h1>{t('loading')}</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const cardReturn = (): JSX.Element => {
    if (type === 'character') {
      const { data } = CharacterSelectors()
      return (
        <div className={styleCharacter.CardsContainer}>
          {data.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      )
    }
    const { data } = LocationSelectors()
    return (
      <div className={styleLocation.CardsContainer}>
        {data.map((item) => (
          <LocationCard key={item.id} location={item} />
        ))}
      </div>
    )
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
      {cardReturn()}
    </InfiniteScroll>
  )
}

export default List
