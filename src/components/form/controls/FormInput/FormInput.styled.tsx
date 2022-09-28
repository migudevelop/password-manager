import styled from 'styled-components'
import { FormInputPropsStyled } from '@models/index'

export const InputStyled = styled.input<FormInputPropsStyled>`
  color: ${({ theme }) => theme.secondaryColor};
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.terciaryColor};
  background: rgba(0, 0, 0, 0);
  outline: none;
  border-radius: 5px;
  :hover,
  :focus {
    border: 2px solid ${({ theme }) => theme.secondaryColor};
  }
`
