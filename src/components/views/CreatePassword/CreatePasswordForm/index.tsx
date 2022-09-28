import { memo, FC } from 'react'
import { FormInput, TextArticle } from '@components/index'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PASSWORD_VALIDATION } from '@shared/helpers/formValidation'
import { PasswordsFormWrapper } from './CreatePasswordForm.styled'

const CreatePasswordForm: FC = () => {
  const { t } = useTranslation('createPassword')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>()
  const { password: passwordError, repeatedPassword: repeatedPasswordError } =
    errors
  return (
    <form onSubmit={handleSubmit(handleSubmit((e) => console.log({ e })))}>
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
        error={repeatedPasswordError}
      />
    </form>
  )
}

export default memo(CreatePasswordForm)
