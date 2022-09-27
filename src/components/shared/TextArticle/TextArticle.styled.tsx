import styled from 'styled-components'

export const ArticleWrapper = styled.article``

export const TitleStyled = styled.h2`
  color: ${({ theme }) => theme.secondaryColor};
`

export const ContentTextStyled = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryColor};
  text-align: justify;
`
