import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout, MainSection, CreatePasswordForm } from '@components/index'

const CreatePassword: FC = () => {
  const { t } = useTranslation('createPassword')
  return (
    <Layout>
      <MainSection title={t('title')}>
        <CreatePasswordForm />
      </MainSection>
    </Layout>
  )
}

export default memo(CreatePassword)
