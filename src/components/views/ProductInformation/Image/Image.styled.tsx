import styled from 'styled-components'
import { MEDIAQUERIES } from '@styles/helpers'

export const FigureStyled = styled.figure`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 2.5rem;
  justify-content: center;
  ${MEDIAQUERIES.tablet} {
    margin-bottom: 0.5rem;
  }
`
export const ImageStyled = styled.img`
  margin-bottom: 1rem;
`
export const ImageTextStyled = styled.figcaption`
  text-align: center;
`
