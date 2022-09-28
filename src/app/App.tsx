import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { useAppState } from '@hooks/index'
import ProductInformation from './views/ProductInformation'
import Form from './views/CreatePassword'

const App: FC = () => {
  const { state } = useAppState()
  return (
    <ThemeProvider theme={state?.theme?.theme}>
      <GlobalStyle />
      {state?.app?.currentStep === 1 && <ProductInformation />}
      {state?.app?.currentStep === 2 && <Form />}
    </ThemeProvider>
  )
}
export default App
