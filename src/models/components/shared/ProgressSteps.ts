import { PropsWithChildren } from 'react'
import PropTypes, { InferProps } from 'prop-types'

export enum StepState {
  COMPLETED = 'COMPLETED',
  CURRENT = 'CURRENT',
  NOT_STATE = 'NOT_STATE'
}

export const ProgressStepsPropTypes = {
  currentStep: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired
}

export const StepItemPropTypes = {
  stepState: PropTypes.oneOf([
    StepState.COMPLETED,
    StepState.CURRENT,
    StepState.NOT_STATE
  ])
}

export type ProgressStepsProps = InferProps<typeof ProgressStepsPropTypes>

export type StepItemProps = InferProps<typeof StepItemPropTypes> &
  PropsWithChildren
