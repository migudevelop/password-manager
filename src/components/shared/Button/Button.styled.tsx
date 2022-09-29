import styled, { css } from 'styled-components'
import { ButtonStyledProps } from '@models/index'

const primaryClass = css`
  &.primary {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`
const secondaryClass = css`
  &.secondary {
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.terciaryColor};
  }
`

const terciaryClass = css`
  &.terciary {
    background: ${({ theme }) => theme.terciaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`

const emptyBackgroundClass = css`
  &.emtpy-background {
    background: transparent;
  }
`

export const ButtonStyled = styled.button<ButtonStyledProps>`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 3px;
  text-transform: capitalize;
  user-select: none;
  cursor: pointer;
  ${primaryClass}
  ${secondaryClass}
  ${terciaryClass}
  ${emptyBackgroundClass}
  :focus {
    outline: 0;
  }

  :disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`
