import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const MessageStateIconWrapper = styled.div<any>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  & svg {
    width: 20%;
    ${({ isSuccessState }: { isSuccessState: string }) =>
      isSuccessState && `color: lightgreen;`}
  }
  ${MEDIAQUERIES.tablet} {
    margin-bottom: 0;
    & svg {
      width: 50%;
    }
  }
`
