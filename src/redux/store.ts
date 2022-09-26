import { configureStore } from '@reduxjs/toolkit'
import { appSlicer, themeSlicer } from './slicers'

const store = configureStore({
  reducer: { app: appSlicer.reducer, theme: themeSlicer.reducer }
})

export default store
