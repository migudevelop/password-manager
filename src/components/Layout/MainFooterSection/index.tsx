import { FC, memo } from 'react'
import { MainFooterSectionStyled } from './MainFooterSection.styled'
import { useTranslation } from 'react-i18next'
import { Button } from '@components/index'

const MainFooterSection: FC = () => {
  const { t } = useTranslation('shared')
  return (
    <MainFooterSectionStyled>
      <Button
        className="emtpy-background"
        text={t('btnCancel')}
        onClick={() => {}}
      />
      <Button className="secondary" text={t('btnNext')} onClick={() => {}} />
    </MainFooterSectionStyled>
  )
}

export default memo(MainFooterSection)
