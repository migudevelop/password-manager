import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import { useAppState } from '@shared/hooks'
import ProductInformation from './views/ProductInformation'

const App: FC = () => {
  const { state } = useAppState()
  return (
    <ThemeProvider theme={state?.theme?.theme}>
      <GlobalStyle />
      <ProductInformation />
    </ThemeProvider>
  )
}
export default App
