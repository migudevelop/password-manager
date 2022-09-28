import PropTypes, { InferProps } from 'prop-types'

export const FormInputPropTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired
}

export type FormInputProps = InferProps<typeof FormInputPropTypes>

export type FormInputPropsStyled = any
