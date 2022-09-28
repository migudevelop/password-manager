export interface AppInitialState {
  currentStep: number
  formValues: {
    password: string
    repeatedPassword: string
    secretHelpText: string
  }
}
