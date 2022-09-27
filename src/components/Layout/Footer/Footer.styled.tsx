import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const FooterWrapper = styled.footer`
  display: flex;
  padding: 0.5rem 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.terciaryColor};
  ${MEDIAQUERIES.tablet} {
    padding: 1rem 15rem;
  }
  ${MEDIAQUERIES.desktop} {
    padding: 1rem 20rem;
  }
`
