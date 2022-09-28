import { memo, FC } from 'react'
import { StepItem, SvgCheck } from '@components/index'
import { ProgressStepsProps, StepState } from '@models/index'
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
        {stepsArray.map((_, i) => {
          const step = i + 1
          const stepState = obtainedStepState(step, currentStep)
          return (
            <StepItem key={i} stepState={stepState}>
              {stepState === StepState.COMPLETED ? <SvgCheck /> : i + 1}
            </StepItem>
          )
        })}
      </ProgressStepsStyled>
    </ProgressStepsWrapper>
  )
}

ProgressSteps.defaultProps = {
  currentStep: 1,
  maxSteps: 3
}

export default memo(ProgressSteps)
