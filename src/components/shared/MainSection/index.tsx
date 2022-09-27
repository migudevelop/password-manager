import { MainSectionPropTypes, MainSectionProps } from '@models/index'
import { FC, memo } from 'react'
import { MainSectionWrapper, TitleStyled } from './MainSection.styled'

const MainSection: FC<MainSectionProps> = ({ children, title }) => {
  return (
    <MainSectionWrapper>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children}
    </MainSectionWrapper>
  )
}
MainSection.propTypes = MainSectionPropTypes

export default memo(MainSection)
