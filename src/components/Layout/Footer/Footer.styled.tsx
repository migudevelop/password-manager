import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const FooterWrapper = styled.footer`
  display: flex;
  padding: 1rem 1.75rem;
  margin-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.terciaryColor};
  ${MEDIAQUERIES.tablet} {
    padding: 1rem 15rem;
  }
  ${MEDIAQUERIES.desktop} {
    padding: 2rem 20rem;
  }
`
