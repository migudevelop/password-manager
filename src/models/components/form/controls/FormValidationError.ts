import PropTypes, { InferProps } from 'prop-types'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export const FormValidationErrorPropTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  })
}

export type FormValidationErrorProps = InferProps<
  typeof FormValidationErrorPropTypes
> & {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
