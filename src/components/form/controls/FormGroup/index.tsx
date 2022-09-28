import { memo, FC } from 'react'
import { FormValidationError } from '@components/index'
import { FormGroupStyled, LabelStyled } from './FormGroup.styled'
import { FormGroupProps, FormGroupPropTypes } from '@models/index'

const FormGroup: FC<FormGroupProps> = ({ label, name, error, children }) => (
  <FormGroupStyled>
    {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    {children}
    <FormValidationError name={name} error={error} />
  </FormGroupStyled>
)

FormGroup.propTypes = FormGroupPropTypes

FormGroup.defaultProps = {
  label: '',
  error: {}
}

export default memo(FormGroup)
