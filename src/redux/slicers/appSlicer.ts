import { AppInitialState, MessageStates } from '@models/index'
import { createSlice } from '@reduxjs/toolkit'
import { appReducers } from '@redux/reducers'

export const initialState: AppInitialState = {
  currentStep: 1,
  maxSteps: 3,
  isValidForm: false,
  feedbackState: MessageStates.NO_MESSAGE,
  isLoading: false,
  formValues: {
    password: '',
    repeatedPassword: '',
    secretHelpText: ''
  }
}

const appSlicer = createSlice({
  name: 'app',
  initialState,
  reducers: appReducers.reducers,
  extraReducers: appReducers.extraReducers
})

export default appSlicer
