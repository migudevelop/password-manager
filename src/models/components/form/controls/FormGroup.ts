import PropTypes, { InferProps } from 'prop-types'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export const FormGroupPropTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }),
  children: PropTypes.node.isRequired
}

export type FormGroupProps = InferProps<typeof FormGroupPropTypes> & {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
