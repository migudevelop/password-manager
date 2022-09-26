import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { themeSlicer } from './slicers'

const store = configureStore({
  reducer: { theme: themeSlicer.reducer }
})

export default store
