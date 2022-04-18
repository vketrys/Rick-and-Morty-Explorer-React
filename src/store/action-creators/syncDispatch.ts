import { Dispatch } from 'redux'
import { CharacterActionTypes, CharacterAction } from 'types/characterTypes'
import { AppThunk } from 'types/thunkTypes'

const syncDispatch = (): AppThunk<void> => {
  return (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.FETCH_CHARACTERS,
      payload: null,
    })
  }
}

export default syncDispatch
