import { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '@redux/slicers/appSlicer'

export default {
  resetSteps: (state) => {
    state.currentStep = 1
    state.formValues = { ...initialState.formValues }
  },
  nextStep: (state) => {
    if (state.currentStep <= state.maxSteps) {
      state.currentStep++
    }
  },
  chagePassword: (state, action: PayloadAction<string>) => {
    const { payload = '' } = action
    return { ...state, password: payload }
  },
  chageRepeatPassword: (state, action: PayloadAction<string>) => {
    const { payload = '' } = action
    return { ...state, repeatedPassword: payload }
  },
  changeSecretHelpText: (state, action: PayloadAction<string>) => {
    const { payload = '' } = action
    return { ...state, secretHelpText: payload }
  }
}
