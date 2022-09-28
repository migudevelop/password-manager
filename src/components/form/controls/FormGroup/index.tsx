import { memo, FC } from 'react'
import { FormValidationError } from '@components/index'
import { FormGroupStyled, LabelStyled } from './FormGroup.styled'
import { FormGroupProps } from '@models/index'

const FormGroup: FC<FormGroupProps> = ({ label, name, error, children }) => (
  <FormGroupStyled>
    {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    {children}
    <FormValidationError name={name} error={error} />
  </FormGroupStyled>
)

FormGroup.defaultProps = {
  label: ''
}

export default memo(FormGroup)
