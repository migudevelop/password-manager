import { FC, PropsWithChildren, memo } from 'react'
import { Header, ProgressSteps } from '@components/index'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header>
        <ProgressSteps />
      </Header>
      <main>{children}</main>
    </>
  )
}

export default memo(Layout)
