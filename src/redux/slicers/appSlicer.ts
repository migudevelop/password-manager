import { AppInitialState } from '@src/models/index'
import { createSlice } from '@reduxjs/toolkit'
import { appReducers } from '@redux/reducers'

export const initialState: AppInitialState = {
  currentStep: 3,
  maxSteps: 3,
  isCorrectPassword: false
}

const appSlicer = createSlice({
  name: 'app',
  initialState,
  reducers: appReducers
})

export default appSlicer
