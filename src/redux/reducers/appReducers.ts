import { PayloadAction } from '@reduxjs/toolkit'

export default {
  resetSteps: (state) => {
    state.currentStep = 1
    state.isCorrectPassword = false
  },
  nextStep: (state) => {
    if (state.currentStep <= state.maxSteps) {
      state.currentStep++
    }
  },
  changeCorretPassword: (state, action: PayloadAction<boolean>) => {
    state.isCorrectPassword = action?.payload
  }
}
