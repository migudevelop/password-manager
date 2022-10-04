import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState, AppDispatch, FormValues } from '@models/index'
import { appSlicer } from '@redux/slicers'
import { getIsCorrectPassword } from '@redux/reducers/appReducers'
import { obtainedRoute } from '@shared/helpers/utils'

const useAppState: Function = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch: AppDispatch = useDispatch()
  const { resetSteps, nextStep, changeIsValidForm, changeFormValues } =
    appSlicer.actions
  const history = useHistory()

  const handleCancel = (): void => {
    dispatch(resetSteps())
    history.push(obtainedRoute())
  }

  const handleNextStep = (): void => {
    if (state.app.currentStep === 2) {
      dispatch(getIsCorrectPassword(state.app.formValues))
    }
    dispatch(nextStep())
    history.push(obtainedRoute(state.app.currentStep))
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
