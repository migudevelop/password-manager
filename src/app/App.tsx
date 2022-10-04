import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyle'
import { Routers } from '@components/index'
import { useAppState } from '@hooks/index'

const App: FC = () => {
  const { state } = useAppState()
  return (
    <ThemeProvider theme={state?.theme?.theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  )
}
export default App
