import { PayloadAction } from '@reduxjs/toolkit'

export default {
  nextStep: (state) => {
    const { currentStep } = state
    return { ...state, currentStep }
  },
  prevStep: (state) => {
    const { currentStep } = state
    return { ...state, currentStep }
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
