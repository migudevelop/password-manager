import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const MessageStateWrapper = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${MEDIAQUERIES.tablet} {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    margin-top: 1.5rem;
    padding: 0 1rem;
    border: 1px solid;
    border-radius: 1rem;
    box-shadow: 1px 0 5px;
  }
`
