import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTranslation } from 'react-i18next'
import 'config/i18n'

import fetchLocations from 'store/action-creators/locations/moreLocations'
import LocationCard from 'components/card/LocationCard'
import style from 'components/card/LocationCard.module.scss'
import { LocationSelectors } from 'components/selectors'

const LocationList: React.FC = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = LocationSelectors()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLocations(page))
    setPage((page) => page + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextPage = (): void => {
    setPage((page) => page + 1)
    dispatch(fetchLocations(page))
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
      hasMore={page <= 7}
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
    >
      <div className={style.CardsContainer}>
        {data.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default LocationList
