import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SmallStyled } from './FormValidationError.styled'
import { FormValidationErrorProps } from '@models/index'
import { obtainedErrorMessageKey } from '@shared/helpers/formValidation'

const FormValidationError: FC<FormValidationErrorProps> = ({ name, error }) => {
  const { t } = useTranslation('shared')
  const messageKey = obtainedErrorMessageKey(error?.type)
  const message = error?.message?.length
    ? error?.message
    : t(`error.${messageKey}`, { name })
  return <SmallStyled>{message}</SmallStyled>
}

export default memo(FormValidationError)
