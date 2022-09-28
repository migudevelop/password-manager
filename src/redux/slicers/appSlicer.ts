import { AppInitialState } from '@src/models/index'
import { createSlice } from '@reduxjs/toolkit'
import { appReducers } from '@redux/reducers'

export const initialState: AppInitialState = {
  currentStep: 1,
  maxSteps: 3,
  formValues: {
    password: '',
    repeatedPassword: '',
    secretHelpText: ''
  }
}

const appSlicer = createSlice({
  name: 'app',
  initialState,
  reducers: appReducers
})

export default appSlicer
