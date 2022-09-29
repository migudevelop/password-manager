import styled, { css, ThemeProps } from 'styled-components'
import { StepItemProps, StepState } from '@models/index'

export const StepItemStyled = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
  position: relative;
`

const StepLabelBackground = css`
  ${({ theme, stepState }: ThemeProps<any> & StepItemProps) => {
    const commonSize = `height: 2rem; width: 2rem;`
    switch (stepState) {
      case StepState.COMPLETED: {
        return `${commonSize}; background-color: ${theme.primaryColor}`
      }
      case StepState.CURRENT: {
        return `height: 2.5rem; width: 2.5rem; background-color: ${theme.secondaryColor}`
      }
      default: {
        return `${commonSize}; background-color: ${theme.terciaryColor}`
      }
    }
  }};
`

const StepAfterLabelBackground = css`
  ${({ theme, stepState }: ThemeProps<any> & StepItemProps) => {
    if (stepState === StepState.NOT_STATE) {
      return theme.terciaryColor
    }
    return theme.primaryColor
  }};
`

export const StepLabelStyled = styled.span<StepItemProps>`
  ${StepLabelBackground};
  color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 6px -2px rgb(0 0 0 / 60%);
  border-radius: 50%;
  line-height: 2.5rem;
  display: inline-flex;
  transform-origin: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  fill {
    ${({ theme }) => theme.backgroundColor};
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    height: 3px;
    width: 100%;
    right: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background: ${StepAfterLabelBackground};
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 200ms ease-in-out;
  }
`
