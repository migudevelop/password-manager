import { FC } from 'react'
import { StepItem } from '@components/index'
import {
  ProgressStepsWrapper,
  ProgressStepsStyled
} from './ProgressSteps.styled'

const ProgressSteps: FC = () => {
  return (
    <ProgressStepsWrapper>
      <ProgressStepsStyled>
        <StepItem>1</StepItem>
        <StepItem>2</StepItem>
        <StepItem>3</StepItem>
      </ProgressStepsStyled>
    </ProgressStepsWrapper>
  )
}

ProgressSteps.defaultProps = {
  currentStep: 1,
  maxSteps: 3
}

export default ProgressSteps
