import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch, FormValues } from '@models/index'
import { appSlicer } from '@redux/slicers'
import { getIsCorrectPassword } from '@redux/reducers/appReducers'

const useAppState: Function = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch: AppDispatch = useDispatch()
  const { resetSteps, nextStep, changeIsValidForm, changeFormValues } =
    appSlicer.actions

  const handleCancel = (): void => {
    dispatch(resetSteps())
  }

  const handleNextStep = (): void => {
    if (state.app.currentStep === 2) {
      dispatch(getIsCorrectPassword(state.app.formValues))
    }
    dispatch(nextStep())
  }

  const handleChangeFormData = (
    value: boolean,
    formValus: FormValues
  ): void => {
    dispatch(changeIsValidForm(value))
    dispatch(changeFormValues(formValus))
  }

  return {
    state,
    dispatch,
    handleCancel,
    handleNextStep,
    handleChangeFormData
  }
}

export default useAppState
