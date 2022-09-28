import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SmallStyled } from './FormValidationError.styled'
import {
  FormValidationErrorPropTypes,
  FormValidationErrorProps
} from '@models/index'

const FormValidationError: FC<FormValidationErrorProps> = ({ name, error }) => {
  const { t } = useTranslation('shared.error')
  const messageKey = error?.type ?? ''
  const message = error?.message ?? t(messageKey, { name })
  return <SmallStyled>{message}</SmallStyled>
}

FormValidationError.propTypes = FormValidationErrorPropTypes

export default memo(FormValidationError)
