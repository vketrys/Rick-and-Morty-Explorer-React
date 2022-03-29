import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/reducers/rootReducer'

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypeSelector
