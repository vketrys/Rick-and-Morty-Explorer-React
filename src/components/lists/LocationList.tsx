import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTranslation } from 'react-i18next'
import 'config/i18n'
import { AppThunk } from 'types/thunkTypes'
import fetchMoreLocations from 'store/action-creators/locations/moreLocations'

import useTypeSelector from 'hooks/useTypeSelector'
import fetchLocations from 'store/action-creators/locations/location'
import LocationCard from 'components/card/LocationCard'
import style from 'components/card/LocationCard.module.scss'

const LocationList: React.FC = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const { locations, error, isLoading } = useTypeSelector(
    (state) => state.location
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLocations())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => setPage((page) => page + 1), [locations])

  if (isLoading) {
    return <h1>{t('loading')}</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <InfiniteScroll
      dataLength={locations.length}
      next={(): AppThunk<void> => dispatch(fetchMoreLocations(page))}
      hasMore
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
    >
      <div className={style.CardsContainer}>
        {locations.map((location) => (
          <div key={location.id}>
            <LocationCard location={location} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default LocationList
