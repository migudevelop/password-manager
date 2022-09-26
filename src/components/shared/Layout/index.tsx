import { FC, PropsWithChildren, memo } from 'react'
import { Header } from '@components/index'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default memo(Layout)
