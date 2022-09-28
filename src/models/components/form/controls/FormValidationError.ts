import PropTypes, { InferProps } from 'prop-types'

export const FormValidationErrorPropTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired
}

export type FormValidationErrorProps = InferProps<
  typeof FormValidationErrorPropTypes
>
