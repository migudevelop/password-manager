import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TitleStyled = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.secondaryColor};
  ${MEDIAQUERIES.tablet} {
    text-align: justify;
  }
`
