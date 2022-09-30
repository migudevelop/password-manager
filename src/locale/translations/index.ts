import createPassword from './CreatePassword'
import feedback from './Feedback'
import productInformation from './ProductInformation'
import shared from './shared'

export default {
  es: {
    ...createPassword.es,
    ...feedback.es,
    ...productInformation.es,
    ...shared.es
  }
}
