import { FC, memo } from 'react'
import { MainFooterSectionStyled } from './MainFooterSection.styled'
import { useTranslation } from 'react-i18next'
import { Button } from '@components/index'
import { useAppState } from '@hooks/index'

const MainFooterSection: FC = () => {
  const { t } = useTranslation('shared')
  const { handleCancel, handleNextStep } = useAppState()
  return (
    <MainFooterSectionStyled>
      <Button
        className="emtpy-background"
        text={t('btnCancel')}
        onClick={handleCancel}
      />
      <Button
        className="secondary"
        text={t('btnNext')}
        onClick={handleNextStep}
      />
    </MainFooterSectionStyled>
  )
}

export default memo(MainFooterSection)
