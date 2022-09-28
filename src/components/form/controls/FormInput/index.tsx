import { FC, memo } from 'react'
import { FormGroup } from '@components/index'
import { InputStyled } from './FormInput.styled'
import { FormInputPropTypes, FormInputProps } from '@models/index'

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  type,
  autoFocus,
  error,
  defaultValue
}) => (
  <FormGroup name={name} label={label} error={error}>
    <InputStyled
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
    />
  </FormGroup>
)

FormInput.propTypes = FormInputPropTypes

FormInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  autoFocus: false,
  error: {},
  defaultValue: ''
}

export default memo(FormInput)
