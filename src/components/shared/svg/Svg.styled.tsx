import styled, { keyframes } from 'styled-components'
import { LoaderSpinnerStyledProps, LoaderSpinnerSizes } from '@models/index'

export const SvgStyled = styled.svg`
  width: 50%;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SvgSpinnerStyled = styled.svg`
  width: ${({ size }: LoaderSpinnerStyledProps) => {
    switch (size) {
      case LoaderSpinnerSizes.LARGE_BUTTON:
        return '1.5vw;'
      case LoaderSpinnerSizes.MEDIUM_BUTTON:
        return '5vw;'
      case LoaderSpinnerSizes.SMALL_BUTTON:
        return '10vw;'
      default:
        return '5vw;'
    }
  }};
  color: ${({ theme }) => theme.secondaryColor};
  animation: ${spin} 2s linear infinite;
`
