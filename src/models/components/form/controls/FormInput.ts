import PropTypes, { InferProps } from 'prop-types'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
  RegisterOptions
} from 'react-hook-form'

export const FormInputPropTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string
}

export type FormInputProps = InferProps<typeof FormInputPropTypes> & {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  register: UseFormRegister<any>
  validation?: RegisterOptions
}

export type FormInputPropsStyled = any
