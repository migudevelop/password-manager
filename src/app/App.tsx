import { FC, Suspense, lazy } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { useAppState } from '@hooks/index'
import { FullPageLoader } from '@components/index'
const ProductInformation = lazy(
  async () => await import('./views/ProductInformation')
)
const Form = lazy(async () => await import('./views/CreatePassword'))
const Feedback = lazy(async () => await import('./views/Feedback'))

const App: FC = () => {
  const { state } = useAppState()
  return (
    <ThemeProvider theme={state?.theme?.theme}>
      <GlobalStyle />
      <Suspense fallback={<FullPageLoader />}>
        {state?.app?.currentStep === 1 && <ProductInformation />}
        {state?.app?.currentStep === 2 && <Form />}
        {state?.app?.currentStep === 3 && <Feedback />}
      </Suspense>
    </ThemeProvider>
  )
}
export default App
