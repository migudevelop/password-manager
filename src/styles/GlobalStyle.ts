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
		#root{
			height: 100%;
			display: flex;
  			flex-direction: column;
  			align-items: stretch;
		}
		main{
			flex-grow: 1;
			overflow-y: auto;
			margin: 0 2.5rem;
			${MEDIAQUERIES.tablet} {
				margin: 0 15rem;
			}
			${MEDIAQUERIES.desktop} {
				margin: 0 20rem;
			}
		}
		header, main, footer {
			flex-shrink: 0;
		}
	}
`

export default memo(GlobalStyle)
