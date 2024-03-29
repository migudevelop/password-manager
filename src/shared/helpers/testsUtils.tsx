import { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { RootState } from '@models/index'
import { appSlicer, themeSlicer } from '@redux/slicers/index'
import { initialState as appInitialState } from '@redux/slicers/appSlicer'
import { initialState as themeInitialState } from '@redux/slicers/themeSlicer'
import { createMemoryHistory } from 'history'
import { RoutesValues } from '../constants'
import '@locale/i18next-config'

export const createInitialState = (): RootState => ({
  app: appInitialState,
  theme: themeInitialState
})

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<any>
  store?: any
}

export const renderWithRedux = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { app: appSlicer.reducer, theme: themeSlicer.reducer },
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
): Object => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    const history = createMemoryHistory({
      initialEntries: [
        RoutesValues.HOME,
        RoutesValues.CREATE_PASSWORD,
        RoutesValues.FEEDBACK
      ]
    })
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
