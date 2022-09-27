import { FC, PropsWithChildren, memo } from 'react'
import { Header, ProgressSteps, Footer } from '@components/index'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header>
        <ProgressSteps />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default memo(Layout)
