import { FC, PropsWithChildren, memo } from 'react'
import { Header, ProgressSteps, Footer } from '@components/index'
import { MainStyled } from './MainLayout.styled'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header>
        <ProgressSteps />
      </Header>
      <MainStyled>{children}</MainStyled>
      <Footer />
    </>
  )
}

export default memo(Layout)
