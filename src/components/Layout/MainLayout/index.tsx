import { FC, PropsWithChildren, memo } from 'react'
import { Header, ProgressSteps, Footer } from '@components/index'
import { MainStyled } from './MainLayout.styled'
import { useAppState } from '@hooks/index'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { app }
  } = useAppState()
  return (
    <>
      <Header>
        <ProgressSteps
          currentStep={app?.currentStep}
          maxSteps={app?.maxSteps}
        />
      </Header>
      <MainStyled>{children}</MainStyled>
      <Footer />
    </>
  )
}

export default memo(Layout)
