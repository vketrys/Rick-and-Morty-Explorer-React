import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Dispatch } from 'redux'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../config/i18n'

import useTypeSelector from '../../hooks/useTypeSelector'
import fetchCharacters from '../../store/action-creators/character'
import style from '../card/Card.module.scss'
import Card from '../card/Card'
import {
  AppThunk,
  CharacterAction,
  CharacterActionTypes,
} from '../../types/characterTypes'

let page = 2

const CharacterList: React.FC = () => {
  const { t } = useTranslation()
  const { characters, error, loading } = useTypeSelector(
    (state) => state.character
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  const fetchMoreCharacters = (): AppThunk<void> => {
    return async (dispatch: Dispatch<CharacterAction>) => {
      try {
        const api = `${process.env.REACT_APP_CHARS_NEXT_PAGE_URL}${page}`
        const response = await axios.get(api)
        page += 1
        dispatch({
          type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
          payload: [...characters, ...response.data.results],
        })
      } catch (error) {
        dispatch({
          type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
          payload: 'Loading error',
        })
      }
    }
  }

  if (loading) {
    return <h1>{t('loading')}</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={(): AppThunk<void> => dispatch(fetchMoreCharacters())}
      hasMore={characters.length <= 812}
      loader={<h4>{t('loading')}</h4>}
      height={450}
      endMessage={<b>{t('scrollEnd')}</b>}
      className={style.Scrollbar}
    >
      <div className={style.CardsContainer}>
        {characters.map((character) => (
          <div key={character.id}>
            <Card character={character} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default CharacterList
