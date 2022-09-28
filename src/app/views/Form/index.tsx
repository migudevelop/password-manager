import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout, MainSection, FormContainer } from '@components/index'

const Form: FC = () => {
  const { t } = useTranslation('form')
  return (
    <Layout>
      <MainSection title={t('title')}>
        <FormContainer onSubmit={() => {}}>hola</FormContainer>
      </MainSection>
    </Layout>
  )
}

export default memo(Form)
