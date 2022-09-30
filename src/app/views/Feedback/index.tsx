import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout, MainSection, MessageState } from '@components/index'
import { MessageStates } from '@models/index'

const ProductInformation: FC = () => {
  const { t } = useTranslation('feedback')
  return (
    <Layout>
      <MainSection title={t('title')}>
        <MessageState state={MessageStates.SUCCESS} />
      </MainSection>
    </Layout>
  )
}

export default memo(ProductInformation)
