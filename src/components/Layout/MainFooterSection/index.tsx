import { FC, memo } from 'react'
import { MainFooterSectionStyled } from './MainFooterSection.styled'
import { useTranslation } from 'react-i18next'
import { Button } from '@components/index'
import { useAppState } from '@hooks/index'
import { isDisabledContinueButon, isLastStep } from '@src/shared/helpers/utils'

const MainFooterSection: FC = () => {
  const { t } = useTranslation('shared')
  const {
    state: { app },
    handleCancel,
    handleNextStep
  } = useAppState()

  const showLastStepButons = isLastStep(app)

  return (
    <MainFooterSectionStyled showLastStepButons={showLastStepButons}>
      {!showLastStepButons && (
        <>
          <Button
            className="emtpy-background"
            text={t('btnCancel')}
            onClick={handleCancel}
          />
          <Button
            className="secondary"
            text={t('btnNext')}
            disabled={isDisabledContinueButon(app)}
            onClick={handleNextStep}
          />
        </>
      )}
      {showLastStepButons && (
        <Button
          className="emtpy-background"
          text={t('returnPasswordManager')}
          onClick={handleCancel}
        />
      )}
    </MainFooterSectionStyled>
  )
}

export default memo(MainFooterSection)
