import styled, { css } from 'styled-components'
import { ButtonStyledProps } from '@models/index'

const primaryClass = css`
  .primary {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.terciaryColor};
  }
`
const secondaryClass = css`
  .secondary {
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.terciaryColor};
  }
`

const terciaryClass = css`
  .terciary {
    background: ${({ theme }) => theme.terciaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`

export const ButtonStyled = styled.button<ButtonStyledProps>`
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  border: none;
  transition: color 0.3s ease 0s, background 0.3s ease 0s;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  ${primaryClass}
  ${secondaryClass}
  ${terciaryClass}
  :focus {
    outline: 0;
  }

  :disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`
