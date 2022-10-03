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
  defaultValue,
  register,
  validation
}) => (
  <FormGroup name={name} label={label} error={error}>
    <InputStyled
      data-testid={name}
      type={type}
      {...register(name, validation)}
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
  defaultValue: '',
  validation: {}
}

export default memo(FormInput)
