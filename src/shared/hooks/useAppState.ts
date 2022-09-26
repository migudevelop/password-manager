import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@models/index'

const useAppState: Function = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch: AppDispatch = useDispatch()

  return { state, dispatch }
}

export default useAppState
