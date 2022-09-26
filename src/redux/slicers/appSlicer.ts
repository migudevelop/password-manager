import { AppInitialState } from '@src/models/index'
import { createSlice } from '@reduxjs/toolkit'
import { appReducers } from '@redux/reducers'

const initialState: AppInitialState = {
  currentStep: 1,
  password: '',
  repeatedPassword: '',
  secretHelpText: ''
}

const appSlicer = createSlice({
  name: 'app',
  initialState,
  reducers: appReducers
})

export default appSlicer
