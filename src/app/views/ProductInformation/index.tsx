import { memo, FC } from 'react'
import { Layout, MainSection } from '@components/index'

const ProductInformation: FC = () => {
  return (
    <Layout>
      <MainSection title="Crea tu Password Manager" />
    </Layout>
  )
}

export default memo(ProductInformation)
