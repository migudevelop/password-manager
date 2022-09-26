import { ThemeInitialState } from '@src/models/index'
import { createSlice } from '@reduxjs/toolkit'
import { LIGHT_THEME, DARK_THEME } from '@styles/themes'
import { DEFAULT_THEME, LIGHT } from '@shared/constants'
import { themeReducers } from '@redux/reducers'

const initialState: ThemeInitialState = {
  theme: DEFAULT_THEME === LIGHT ? LIGHT_THEME : DARK_THEME
}

const themeSlicer = createSlice({
  name: 'theme',
  initialState,
  reducers: themeReducers
})

export default themeSlicer
