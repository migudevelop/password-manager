import { ThemeInitialState } from '@models/index'
import { memo } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		width: 100vw;
		height: 100vh;
		background: ${({ theme }: ThemeInitialState) => theme.backgroundColor};
		overflow: hidden;
		main{
			margin: 0 1.5rem;
		}
	}
`

export default memo(GlobalStyle)
