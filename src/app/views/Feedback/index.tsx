import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Layout,
  MainSection,
  MessageState,
  LoaderSpinner
} from '@components/index'
import { useAppState } from '@hooks/index'

const ProductInformation: FC = () => {
  const { t } = useTranslation('feedback')
  const { state } = useAppState()
  return (
    <Layout>
      {state?.app?.isLoading && <LoaderSpinner />}
      {!state?.app?.isLoading && (
        <MainSection title={t('title')}>
          <MessageState state={state?.app?.feedbackState} />
        </MainSection>
      )}
    </Layout>
  )
}

export default memo(ProductInformation)
