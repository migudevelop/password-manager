import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '@redux/store'
import '@locale/i18next-config'

export const ComponentWithRedux: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)
