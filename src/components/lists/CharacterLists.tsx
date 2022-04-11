import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Dispatch } from 'redux'
import axios from 'axios'

import useTypeSelector from '../../hooks/useTypeSelector'
import fetchCharacters from '../../store/action-creators/character'
import style from '../card/Card.module.scss'
import Card from '../card/Card'
import {
  CharacterAction,
  CharacterActionTypes,
} from '../../types/characterTypes'
import { RootState } from '../../store/reducers'

export type ThunkAction<R, S, E, A extends CharacterAction> = (
  dispatch: Dispatch<CharacterAction>,
  getState: () => S,
  extraArgument: E
) => R

let page = 2

const CharacterList: React.FC = () => {
  const { characters, error, loading } = useTypeSelector(
    (state) => state.character
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  const fetchMoreCharacters = (): ThunkAction<
    void,
    RootState,
    unknown,
    CharacterAction
  > => {
    return async (dispatch: Dispatch<CharacterAction>) => {
      try {
        const api = `https://rickandmortyapi.com/api/character?page=${page}`
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
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={(): ThunkAction<void, RootState, unknown, CharacterAction> =>
        dispatch(fetchMoreCharacters())
      }
      hasMore={characters.length <= 812}
      loader={<h4>Loading...</h4>}
      height={450}
      endMessage={<b>You have seen it all, mate!</b>}
      className={style.Scrollbar}
    >
      <div className={style.CardsContainer}>
        {characters.map((character) => (
          <div>
            <Card character={character} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default CharacterList
