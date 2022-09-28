import { memo, FC } from 'react'
import { Image } from '@components/index'
import { ImageSectionWrapper } from './ImageSection.styled'
import gearHead from '@assets/img/gear-head.svg'
import secureBox from '@assets/img/secure-box.svg'
import { useTranslation } from 'react-i18next'

const ImagesSection: FC = () => {
  const { t } = useTranslation('productInformation')
  return (
    <ImageSectionWrapper>
      <Image src={gearHead} text={t('gearHead.text')} />
      <Image src={secureBox} text={t('secureBox.text')} />
    </ImageSectionWrapper>
  )
}

export default memo(ImagesSection)
