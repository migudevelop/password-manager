import { memo, FC } from 'react'
import { Image, SvgGearHead, SvgSecureBox } from '@components/index'
import { ImageSectionWrapper } from './ImageSection.styled'
import { useTranslation } from 'react-i18next'

const ImagesSection: FC = () => {
  const { t } = useTranslation('productInformation')
  return (
    <ImageSectionWrapper>
      <Image imageToDisplay={<SvgGearHead />} text={t('gearHead.text')} />
      <Image imageToDisplay={<SvgSecureBox />} text={t('secureBox.text')} />
    </ImageSectionWrapper>
  )
}

export default memo(ImagesSection)
