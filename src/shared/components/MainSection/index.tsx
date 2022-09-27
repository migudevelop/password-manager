import { FC, PropsWithChildren, memo } from 'react'
import { MainSectionWrapper, TitleStyled } from './MainSection.styled'

const MainSection: FC<
  PropsWithChildren & {
    title?: string
  }
> = ({ children, title }) => {
  return (
    <MainSectionWrapper>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children}
    </MainSectionWrapper>
  )
}

export default memo(MainSection)
