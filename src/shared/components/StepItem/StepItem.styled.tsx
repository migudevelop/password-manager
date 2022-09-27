import styled, { css } from 'styled-components'

export const StepItemStyled = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
  position: relative;
`

const StepLabelBackground = css`
  ${({ theme }) => {
    const stepState: string = 'CURRENT'
    switch (stepState) {
      case 'COMPLETED': {
        return theme.primaryColor
      }
      case 'CURRENT': {
        return theme.secondaryColor
      }
      default: {
        return theme.terciaryColor
      }
    }
  }};
`

export const StepLabelStyled = styled.span`
  background-color: ${StepLabelBackground};
  color: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  display: inline-flex;
  transform-origin: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    height: 3px;
    width: 100%;
    right: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background: ${({ theme }) => theme.secondaryColor};
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 200ms ease-in-out;
  }
`
