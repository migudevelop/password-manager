import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TitleStyled = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.secondaryColor};
  &::after {
    display: none;
  }
  ${MEDIAQUERIES.tablet} {
    &::after {
      display: inline-block;
      position: absolute;
      content: '';
      border-bottom: 6px solid #00c3dd;
      width: 4%;
      left: 0;
      bottom: -10px;
    }
    text-align: justify;
  }
`
