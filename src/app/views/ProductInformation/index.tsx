import { memo, FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Layout,
  MainSection,
  ImagesSection,
  TextArticle
} from '@components/index'

const ProductInformation: FC = () => {
  const { t } = useTranslation('productInformation')
  return (
    <Layout>
      <MainSection title={t('title')}>
        <ImagesSection />
        <TextArticle
          title={t('howWork.title')}
          contentText={t('howWork.contentText')}
        />
        <TextArticle
          title={t('dataToSave.title')}
          contentText={t('dataToSave.contentText')}
        />
      </MainSection>
    </Layout>
  )
}

export default memo(ProductInformation)
