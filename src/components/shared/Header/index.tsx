import { FC, PropsWithChildren, memo } from 'react'
import { HeaderStyled } from './Header.styled'

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>
}

export default memo(Header)
