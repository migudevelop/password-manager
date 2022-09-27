import styled from 'styled-components'

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.secondaryColor};
`
