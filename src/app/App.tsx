import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import { LIGHT_THEME } from '../styles/themes.js'
import { Layout } from '@components/index'

const App: FC = () => (
  <ThemeProvider theme={{ theme: LIGHT_THEME }}>
    <GlobalStyle />
    <Layout />
  </ThemeProvider>
)
export default App
