import productInformation from './ProductInformation'
import shared from './shared'

export default {
  es: {
    ...shared.es,
    ...productInformation.es
  }
}
