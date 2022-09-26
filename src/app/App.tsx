import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import { Layout } from '@shared/components/index'
import { useAppState } from '@shared/hooks'

const App: FC = () => {
  const { state } = useAppState()
  return (
    <ThemeProvider theme={{ theme: state?.theme }}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}
export default App
