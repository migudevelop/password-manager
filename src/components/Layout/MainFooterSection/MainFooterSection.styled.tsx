import styled, { ThemeProps } from 'styled-components'

export const MainFooterSectionStyled = styled.section<
  ThemeProps<any> & { showLastStepButons: boolean }
>`
  display: flex;
  justify-content: ${({ showLastStepButons }) =>
    showLastStepButons ? 'flex-end' : 'space-between'};
  flex-grow: 1;
`
