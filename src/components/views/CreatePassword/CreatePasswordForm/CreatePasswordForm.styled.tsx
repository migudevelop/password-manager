import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const PasswordsFormWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: flex-start;
  ${MEDIAQUERIES.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10rem;
  }
  ${MEDIAQUERIES.desktop} {
    grid-column-gap: 20rem;
  }
`
