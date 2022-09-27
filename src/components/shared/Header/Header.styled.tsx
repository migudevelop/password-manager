import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const HeaderStyled = styled.header`
  display: flex;
  padding: 2.5rem 1.75rem;
  background: ${({ theme }) => theme.secondaryBackgroundColor};
  ${MEDIAQUERIES.tablet} {
    padding: 2.5rem 15rem;
  }
  ${MEDIAQUERIES.desktop} {
    padding: 2.5rem 20rem;
  }
`
