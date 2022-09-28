import { StepState } from '@models/index'

export const obtainedStepState = (
  step: number,
  currentStep: number
): StepState => {
  const realStep = step + 1
  if (realStep === currentStep) {
    return StepState.CURRENT
  }
  if (realStep < currentStep) {
    return StepState.COMPLETED
  }
  return StepState.NOT_STATE
}
