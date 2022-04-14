import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'store/reducers'

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypeSelector
