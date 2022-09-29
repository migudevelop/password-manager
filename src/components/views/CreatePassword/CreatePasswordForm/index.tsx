import { memo, FC, useEffect } from 'react'
import { FormInput, TextArticle } from '@components/index'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PASSWORD_VALIDATION } from '@shared/helpers/formValidation'
import { PasswordsFormWrapper } from './CreatePasswordForm.styled'
import { useAppState } from '@src/hooks'

const CreatePasswordForm: FC = () => {
  const { t } = useTranslation('createPassword')
  const { handleChangeCorretPassword } = useAppState()

  const {
    register,
    formState: { errors, isValid }
  } = useForm<any>({ mode: 'onChange' })
  console.log('🚀 ~ file: index.tsx ~ line 21 ~ isValid', isValid)
  const {
    password: passwordError,
    repeatedPassword: repeatedPasswordError,
    secretHelpText: secretHelpTextError
  } = errors

  useEffect(() => {
    if (isValid) handleChangeCorretPassword(true)
  }, [isValid])

  return (
    <form>
      <TextArticle contentText={t('instructions.firstText')} />
      <PasswordsFormWrapper>
        <FormInput
          type="password"
          name="password"
          label={t('form.passwordLabel')}
          register={register}
          validation={PASSWORD_VALIDATION}
          error={passwordError}
        />
        <FormInput
          type="password"
          name="repeatedPassword"
          label={t('form.repeatedPasswordLabel')}
          register={register}
          validation={PASSWORD_VALIDATION}
          error={repeatedPasswordError}
        />
      </PasswordsFormWrapper>
      <TextArticle contentText={t('instructions.secondText')} />
      <FormInput
        name="secretHelpText"
        label={t('form.secretHelpText')}
        register={register}
        validation={{ maxLength: 255 }}
        error={secretHelpTextError}
      />
    </form>
  )
}

export default memo(CreatePasswordForm)
