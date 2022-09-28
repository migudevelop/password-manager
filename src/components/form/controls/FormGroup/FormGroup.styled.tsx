import styled from 'styled-components'

export const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: bold;
  font-size: 1.25rem;
  margin: 20px 0 5px;
`
