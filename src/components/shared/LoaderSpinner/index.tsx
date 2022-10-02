import { FC, memo } from 'react'
import { SvgSpinner } from '@components/index'
import { LoaderSpinnerPropTypes, LoaderSpinnerProps } from '@models/index'
import { LoaderSpinnerWrapper, TextStyled } from './LoaderSpinner.styled'
import { useTranslation } from 'react-i18next'

const LoaderSpinner: FC<LoaderSpinnerProps> = ({ size, text, showText }) => {
  const { t } = useTranslation('shared')
  const loadingText = text ?? t('loadingText')
  return (
    <LoaderSpinnerWrapper>
      <SvgSpinner size={size} />
      {showText && <TextStyled>{loadingText}</TextStyled>}
    </LoaderSpinnerWrapper>
  )
}

LoaderSpinner.propTypes = LoaderSpinnerPropTypes

LoaderSpinner.defaultProps = {
  showText: true
}

export default memo(LoaderSpinner)
