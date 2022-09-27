import styled from 'styled-components'

export const ProgressStepsWrapper = styled.section`
  width: 100%;
  & * {
    box-sizing: border-box;
  }
`
export const ProgressStepsStyled = styled.ol`
  margin: 0 0 1rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  li:first-child {
    span::before {
      content: none;
    }
  }
`
