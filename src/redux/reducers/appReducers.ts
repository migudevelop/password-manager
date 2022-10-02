import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { FormValues, MessageStates } from '@models/index'
import { submitForm } from '../../services/api'

export const getIsCorrectPassword = createAsyncThunk(
  'passwords/getIsCorrectPassword',
  async (data: FormValues) => {
    const { password, repeatedPassword, secretHelpText } = data
    return await submitForm(password, repeatedPassword, secretHelpText)
  }
)

const reducers = {
  resetSteps: (state) => {
    state.currentStep = 1
    state.isValidForm = false
  },
  nextStep: (state) => {
    if (state.currentStep < state.maxSteps) {
      state.currentStep++
    }
  },
  changeIsValidForm: (state, action: PayloadAction<boolean>) => {
    state.isValidForm = action?.payload
  },
  changeFormValues: (state, action: PayloadAction<FormValues>) => {
    state.formValues = action?.payload
  },
  changeFeedbackState: (state, action: PayloadAction<boolean>) => {
    state.feedbackState = action?.payload
  }
}

const extraReducers = (builder): any => {
  builder.addCase(getIsCorrectPassword.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(getIsCorrectPassword.fulfilled, (state) => {
    state.isLoading = false
    state.feedbackState = MessageStates.SUCCESS
  })
  builder.addCase(getIsCorrectPassword.rejected, (state) => {
    state.isLoading = false
    state.feedbackState = MessageStates.ERROR
  })
}

export default { reducers, extraReducers }
