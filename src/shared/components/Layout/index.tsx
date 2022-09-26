import { FC, PropsWithChildren, memo } from 'react'
import { Header } from '@shared/components/index'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default memo(Layout)
