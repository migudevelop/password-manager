import { FC, PropsWithChildren, memo } from 'react'
import { FooterStyled } from './Footer.styled'

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>
}

export default memo(Header)
