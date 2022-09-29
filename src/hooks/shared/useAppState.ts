import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@models/index'
import { appSlicer } from '@redux/slicers'

const useAppState: Function = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch: AppDispatch = useDispatch()
  const { resetSteps, nextStep, changeCorretPassword } = appSlicer.actions

  const handleCancel = (): void => {
    dispatch(resetSteps())
  }

  const handleNextStep = (): void => {
    dispatch(nextStep())
  }

  const handleChangeCorretPassword = (value: boolean): void => {
    dispatch(changeCorretPassword(value))
  }

  return {
    state,
    dispatch,
    handleCancel,
    handleNextStep,
    handleChangeCorretPassword
  }
}

export default useAppState
