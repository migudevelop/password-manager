import { MessageStates } from '@models/index'

export interface FormValues {
  password: string
  repeatedPassword: string
  secretHelpText: string
}

export interface AppInitialState {
  currentStep: number
  maxSteps: number
  isValidForm: boolean
  feedbackState: MessageStates
  isLoading: boolean
  formValues: FormValues
}
