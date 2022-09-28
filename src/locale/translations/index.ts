import createPassword from './CreatePassword'
import productInformation from './ProductInformation'
import shared from './shared'

export default {
  es: {
    ...createPassword.es,
    ...productInformation.es,
    ...shared.es
  }
}
