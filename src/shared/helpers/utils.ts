import { AppInitialState, StepState } from '@models/index'
import { RoutesValues } from '@shared/constants/index'

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
  isValidForm
}: AppInitialState): boolean => currentStep === 2 && !isValidForm

export const isLastStep = ({
  currentStep,
  maxSteps
}: AppInitialState): boolean => currentStep === maxSteps

export const obtainedRoute = (step: number = 0): RoutesValues => {
  const nextStep = step + 1
  switch (nextStep) {
    case 2: {
      return RoutesValues.CREATE_PASSWORD
    }
    case 3: {
      return RoutesValues.FEEDBACK
    }
    default: {
      return RoutesValues.HOME
    }
  }
}
