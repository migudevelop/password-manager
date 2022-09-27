import { ThemeInitialState } from '@models/index'
import { memo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { MEDIAQUERIES } from './helpers'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		width: 100vw;
		height: 100vh;
		background: ${({ theme }: ThemeInitialState) => theme.backgroundColor};
		main{
			overflow-y: auto;
			margin: 0 2.5rem;
			${MEDIAQUERIES.tablet} {
				margin: 0 15rem;
			}
			${MEDIAQUERIES.desktop} {
				margin: 0 20rem;
			}
		}
	}
`

export default memo(GlobalStyle)
