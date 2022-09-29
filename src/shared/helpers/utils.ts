import { AppInitialState, StepState } from '@models/index'

export const obtainedStepState = (
  step: number,
  currentStep: number
): StepState => {
  if (step === currentStep) {
    return StepState.CURRENT
  }
  if (step < currentStep) {
    return StepState.COMPLETED
  }
  return StepState.NOT_STATE
}

export const isDisabledContinueButon = ({
  currentStep,
  isCorrectPassword
}: AppInitialState): boolean => currentStep === 2 && !isCorrectPassword
