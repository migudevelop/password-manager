export interface AppInitialState {
  currentStep: number
  maxSteps: number
  formValues: {
    password: string
    repeatedPassword: string
    secretHelpText: string
  }
}
