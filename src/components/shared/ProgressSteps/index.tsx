import { memo, FC } from 'react'
import { StepItem } from '@components/index'
import { ProgressStepsProps } from '@models/index'
import { obtainedStepState } from '@shared/helpers/utils'
import {
  ProgressStepsWrapper,
  ProgressStepsStyled
} from './ProgressSteps.styled'

const ProgressSteps: FC<ProgressStepsProps> = ({ currentStep, maxSteps }) => {
  const stepsArray = Array?.from({ length: maxSteps })
  return (
    <ProgressStepsWrapper>
      <ProgressStepsStyled>
        {stepsArray.map((_, i) => (
          <StepItem key={i} stepState={obtainedStepState(i, currentStep)}>
            {i + 1}
          </StepItem>
        ))}
      </ProgressStepsStyled>
    </ProgressStepsWrapper>
  )
}

ProgressSteps.defaultProps = {
  currentStep: 1,
  maxSteps: 3
}

export default memo(ProgressSteps)
